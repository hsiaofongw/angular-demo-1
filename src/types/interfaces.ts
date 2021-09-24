/** 分页类型 */
export type Page<T> = T[];

/** 分页请求参数 */
export type OffsetLimitQueryParameter = {
  /** 跳过符合查询结果的记录数 */
  offset: number;
  
  /** 最大返回长度 */
  limit: number;
};

/** 分页返回结果 */
export type PaginationQueryResult<T> = {
  /** 当前页数据 */
  data: T[];

  /** 总长 */
  total: number;
};
