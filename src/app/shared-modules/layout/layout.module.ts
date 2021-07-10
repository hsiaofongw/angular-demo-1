import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MenuModule } from '../menu/menu.module';
import { MetaDataModule } from '../meta-data/meta-data.module';
import { NavTreeComponent } from './components/nav-tree/nav-tree.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { UserModule } from '../user/user.module';

/** 此 Module 负责导出一个实现全局 Layout 的组件 */
@NgModule({
  declarations: [LayoutComponent, NavTreeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MenuModule,
    MetaDataModule,
    CdkTreeModule,
    UserModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
