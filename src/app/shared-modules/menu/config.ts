import { IMenuItem } from "./interface";

/** 菜单数据 */
export const menuData: IMenuItem[] = [
  {
    name: '文章',
    path: 'articles',
    children: [
      {
        name: '全部文章',
        path: '',
      },
      {
        name: 'PDF 文章',
        path: 'pdf',
      },
      {
        name: 'Markdown 文章',
        path: 'markdown',
      }
    ]
  },
  {
    name: '友情链接',
    path: 'friends',
    children: [
      {
        name: '拟添加',
        path: 'pre-approved',
      },
      {
        name: '正式',
        path: ''
      },
      {
        name: '新增',
        path: 'new'
      }
    ]
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
