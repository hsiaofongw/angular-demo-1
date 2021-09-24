import { IArticle } from '../interfaces';
export { IArticle };

export type MarkdownData = { articleId: string };

import {
  Page,
  OffsetLimitQueryParameter,
  PaginationQueryResult,
} from 'src/types/interfaces';
export { Page };

export type ArticleListQueryParameter = OffsetLimitQueryParameter;
export type ArticleListQueryResult = PaginationQueryResult<IArticle>;
