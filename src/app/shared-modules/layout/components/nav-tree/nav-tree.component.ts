import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { IMenuItem } from 'src/app/shared-modules/menu/interface';

interface IMenuNode {
  name: string;
  children?: IMenuNode[];
  path: string;
  fullPath?: string;
  level?: number;
}

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.css'],
})
export class NavTreeComponent implements OnInit {

  @Input()
  menuData: IMenuItem[] = [];

  treeControl = new NestedTreeControl<IMenuNode>((node) => node.children);
  dataSource = new ArrayDataSource([] as IMenuNode[]);

  hasChild = (_: number, node: IMenuNode) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

  ngOnChanges(_: SimpleChanges): void {
    if (this.menuData?.length && this.menuData.length >= 0) {
      this.attachTreeLevel(this.menuData, 0);
      this.attachFullPath(this.menuData, '');
      this.dataSource  = new ArrayDataSource(this.menuData);
    }
  }

  attachTreeLevel(menuNodes: IMenuNode[], level: number): void {
    let nextLevelNodes: IMenuNode[] = [];
    menuNodes.forEach(menuNode => {
      menuNode.level = level;
      if (menuNode.children && menuNode.children.length > 0) {
        nextLevelNodes = [...nextLevelNodes, ...menuNode.children];
      }
    });

    if (nextLevelNodes.length > 0) {
      this.attachTreeLevel(nextLevelNodes, level+1);
    }
  }

  attachFullPath(menuNodes: IMenuNode[], currentPath: string): void {
    menuNodes.forEach(menuNode => {
      menuNode.fullPath = currentPath + '/' + menuNode.path;
      if (menuNode.children && menuNode.children.length > 0) {
        this.attachFullPath(menuNode.children, menuNode.fullPath);
      }
    });
  }
}
