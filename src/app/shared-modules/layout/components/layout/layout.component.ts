import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/shared-modules/menu/interface';
import { MenuService } from 'src/app/shared-modules/menu/services/menu.service';

/** 此组件负责全局 Layout */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menuData: IMenuItem[] = [];

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.menuData = this.menuService.getMenuData();
  }

}
