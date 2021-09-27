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

/** 文章预览数据 */
export type ArticlePreviewData = IArticle & {
  /** 查看次数 */
  visits: number;

  /** 点赞数 */
  votes: number;

  /** 反对数 */
  voteAgainsts: number;

  /** 长描述，如有，在显示时则取代描述 */
  longDescription?: string;

  /** 评论区 id */
  commentZoneId: string;
}
