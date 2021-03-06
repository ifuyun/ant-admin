import { NgModule } from '@angular/core';
import { CommentFlagPipe } from './comment-flag.pipe';
import { CommentStatusPipe } from './comment-status.pipe';
import { LinkScopePipe } from './link-scope.pipe';
import { LinkStatusPipe } from './link-status.pipe';
import { LinkTargetPipe } from './link-target.pipe';
import { PostStatusPipe } from './post-status.pipe';
import { PostTypePipe } from './post-type.pipe';
import { TaxonomyStatusPipe } from './taxonomy-status.pipe';

@NgModule({
  declarations: [
    PostStatusPipe,
    CommentFlagPipe,
    CommentStatusPipe,
    TaxonomyStatusPipe,
    LinkScopePipe,
    LinkStatusPipe,
    LinkTargetPipe,
    PostTypePipe
  ],
  imports: [],
  exports: [
    PostStatusPipe,
    CommentFlagPipe,
    CommentStatusPipe,
    TaxonomyStatusPipe,
    LinkScopePipe,
    LinkStatusPipe,
    LinkTargetPipe,
    PostTypePipe
  ]
})
export class PipesModule {
}
