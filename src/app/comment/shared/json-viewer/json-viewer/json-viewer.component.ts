import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface TreeNode {
  name: string;
  type:
    | 'number'
    | 'string'
    | 'boolean'
    | 'array'
    | 'object'
    | 'null'
    | 'undefined';
  value?:
    | number
    | string
    | boolean
    | Array<unknown>
    | object
    | null
    | undefined;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple', type: 'string', value: 'apple' },
      { name: 'Banana', type: 'number', value: 123 },
      { name: 'Fruit loops', type: 'boolean', value: true },
    ],
    type: 'object',
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        type: 'object',
        children: [
          { name: 'Broccoli', type: 'boolean', value: true },
          { name: 'Brussels sprouts', type: 'null', value: null },
        ],
      },
      {
        name: 'Orange',
        type: 'object',
        children: [
          { name: 'Pumpkins', type: 'number', value: 123 },
          { name: 'Carrots', type: 'string', value: 'hello' },
        ],
      },
    ],
    type: 'object',
  },
];

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css'],
})
export class JsonViewerComponent {
  treeControl = new NestedTreeControl<TreeNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: TreeNode) =>
    !!node.children && node.children.length > 0;
}
