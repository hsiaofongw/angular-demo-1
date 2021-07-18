import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaysComponent } from './components/says/says.component';

const routes: Routes = [{ path: '', component: SaysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaysRoutingModule {}
