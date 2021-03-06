export enum Role {
  ADMIN = 'admin'
}

export enum PostType {
  POST = 'post',
  PAGE = 'page',
  REVISION = 'revision',
  ATTACHMENT = 'attachment',
  STATUS = 'status',
  QUOTE = 'quote',
  NOTE = 'note',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio'
}

export enum PostStatus {
  PUBLISH = 'publish',
  PASSWORD = 'password',
  PRIVATE = 'private',
  DRAFT = 'draft',
  AUTO_DRAFT = 'auto-draft',
  TRASH = 'trash'
}

export enum PostOriginal {
  YES = 1,
  NO = 0
}

export enum CommentFlag {
  OPEN = 'open',
  VERIFY = 'verify',
  CLOSE = 'close'
}

export enum CommentStatus {
  NORMAL = 'normal',
  PENDING = 'pending',
  REJECT = 'reject',
  SPAM = 'spam',
  TRASH = 'trash'
}

export enum CommentAction {
  EDIT = 'edit',
  REPLY = 'reply',
  DETAIL = 'detail'
}

export enum CommentAuditAction {
  RESOLVE = 'normal',
  REJECT = 'reject',
  SPAM = 'spam',
  TRASH = 'trash'
}

export enum VoteType {
  POST = 'post',
  COMMENT = 'comment'
}

export enum TaxonomyType {
  POST = 'post',
  LINK = 'link',
  TAG = 'tag'
}

export enum TaxonomyStatus {
  PUBLISH = 'publish',
  PRIVATE = 'private',
  TRASH = 'trash'
}

export enum LinkTarget {
  BLANK = '_blank',
  SELF = '_self',
  TOP = '_top'
}

export enum LinkScope {
  SITE = 'site',
  HOMEPAGE = 'homepage'
}

export enum LinkStatus {
  NORMAL = 'normal',
  TRASH = 'trash'
}

export enum CopyrightType {
  FORBIDDEN = 0,
  AUTHORIZED = 1,
  CC = 2
}
