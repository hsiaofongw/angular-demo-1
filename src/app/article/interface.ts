import { IArticle } from '../interfaces';
export { IArticle };

export type MarkdownData = { articleId: string };

import {
  Page,
  OffsetLimitQueryParameter,
  PaginationQueryResult,
} from 'src/types/interfaces';
export { Page };

/** 文章列表分页请求参数 */
export type ArticleListQueryParameter = OffsetLimitQueryParameter;

/** 文字列表分页请求结果 */
export type ArticleListQueryResult = PaginationQueryResult<IArticle>;
