import { Injectable } from '@angular/core';
import { menuData } from '../config';
import { IMenuItem } from '../interface';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuData(): IMenuItem[] {
    return menuData;
  }
}
