export interface IArticle {
  title: string;
  date: string;
  url: string;
}

export interface IArticleQueryResult {
  offset: number;
  totalCounts: number;
  results: IArticle[];
}
