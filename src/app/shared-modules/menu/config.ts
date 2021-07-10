import { IMenuItem } from "./interface";

/** 菜单数据 */
export const menuData: IMenuItem[] = [
  {
    name: '文章列表',
    path: 'articles',
  },
  {
    name: '友情链接',
    path: 'friends',
  },
  {
    name: '留言列表',
    path: 'comments',
  },
  {
    name: '项目与 Demo',
    path: 'demos',
  },
  {
    name: '关于',
    path: 'about',
    children: [
      {
        name: '自我介绍',
        path: 'myself',
      },
      {
        name: '此站点',
        path: 'this-site',
      },
      {
        name: '个人简历',
        path: 'resume',
      }
    ]
  },
  {
    name: '个人动态',
    path: 'says',
  },
];
