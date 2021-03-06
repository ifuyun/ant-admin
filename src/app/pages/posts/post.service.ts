import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreadcrumbEntity } from '../../components/breadcrumb/breadcrumb.interface';
import { ApiUrl } from '../../config/api-url';
import { PostType } from '../../config/common.enum';
import { ApiService } from '../../core/api.service';
import { HttpResponseEntity } from '../../core/http-response.interface';
import {
  Post,
  PostArchiveDate,
  PostArchivesQueryParam,
  PostList,
  PostQueryParam,
  PostSaveParam
} from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private apiService: ApiService
  ) {
  }

  getPosts(param: PostQueryParam): Observable<{ postList: PostList, crumbs: BreadcrumbEntity[] }> {
    return this.apiService.httpGet(this.apiService.getApiUrl(ApiUrl.GET_POSTS), param).pipe(
      map((res) => res?.data || {})
    );
  }

  getPostById(postId: string): Observable<Post> {
    return this.apiService.httpGet(this.apiService.getApiUrlWithParam(ApiUrl.GET_POST, postId), {
      fa: 1
    }).pipe(
      map((res) => res?.data || {})
    );
  }

  getPostArchives(param: PostArchivesQueryParam): Observable<PostArchiveDate[]> {
    const { showCount, status, fa } = param;
    let { postType, limit } = param;
    if (limit === null || limit === undefined) {
      limit = 10;
    }
    postType = postType || PostType.POST;
    const reqParam: any = {
      postType,
      showCount: showCount ? 1 : 0,
      limit,
      fa
    };
    if (status && status.length > 0) {
      reqParam.status = status;
    }
    return this.apiService.httpGet(this.apiService.getApiUrl(ApiUrl.GET_POST_ARCHIVES), reqParam).pipe(
      map((res) => res?.data || [])
    );
  }

  savePost(param: PostSaveParam): Observable<HttpResponseEntity> {
    return this.apiService.httpPost(this.apiService.getApiUrl(ApiUrl.SAVE_POSTS), param);
  }

  deletePosts(postIds: string[]): Observable<HttpResponseEntity> {
    return this.apiService.httpDelete(this.apiService.getApiUrl(ApiUrl.DELETE_POSTS), {
      postIds
    });
  }

  uploadFiles(data: FormData) {
    return this.apiService.httpPost(this.apiService.getApiUrl(ApiUrl.UPLOAD_FILES), data);
  }
}
