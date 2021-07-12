import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendComponent } from './components/friend/friend.component';
import { NewFriendComponent } from './components/new-friend/new-friend.component';

const routes: Routes = [
  { path: '', component: FriendComponent, pathMatch: 'full' },
  { path: 'new', component: NewFriendComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendRoutingModule {}
