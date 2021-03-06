import { Component } from '@angular/core';
import { PostType } from '../../../config/common.enum';

@Component({
  selector: 'app-article-list',
  template: `
    <app-post-list [postType]="postType"></app-post-list>
  `
})
export class ArticleListComponent {
  postType = PostType.POST;
}
