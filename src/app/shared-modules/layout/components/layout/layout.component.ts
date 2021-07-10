import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from 'src/app/shared-modules/menu/interface';
import { MenuService } from 'src/app/shared-modules/menu/services/menu.service';
import { IMetaData } from 'src/app/shared-modules/meta-data/interface';
import { MetaDataService } from 'src/app/shared-modules/meta-data/services/meta-data.service';

/** 此组件负责全局 Layout */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menuData: IMenuItem[] = [];

  siteMetaData!: IMetaData;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private metaDataService: MetaDataService,
  ) { }

  ngOnInit(): void {
    this.menuData = this.menuService.getMenuData();
    this.siteMetaData = this.metaDataService.getMetaData();
  }

  login(): void {
    this.router.navigateByUrl('/login');
  }

}
