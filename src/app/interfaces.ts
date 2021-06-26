/** 定义了英雄的数据类型 */
interface IHero {
  id: number;
  name: string;
}
export type Hero = IHero;

/** 查询英雄列表的分页参数 */
export type HeroQueryParameter = {
  offset: number;
  limit: number;
};

/** 查寻英雄列表得到的返回结果 */
export type HeroQueryResult = {
  totalCounts: number;
  heroes: Hero[];
};

/** API 配置类型 */
export type APIConfig = {
  baseURL: string;
  apiPath: string;
};
