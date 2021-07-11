import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { ApiConfigService } from '../friend/services/api-config.service';
import { FriendService } from './services/friend.service';
import { HttpFriendService } from './services/http-friend.service';
import { HttpClientModule } from '@angular/common/http';
import { FriendComponent } from './components/friend/friend.component';
import { LayoutModule } from '../shared-modules/layout/layout.module';

@NgModule({
  declarations: [
    FriendComponent
  ],
  imports: [CommonModule, FriendRoutingModule, HttpClientModule, LayoutModule],
  providers: [
    { provide: FriendService, useClass: HttpFriendService },
    ApiConfigService,
    HttpFriendService,
  ],
})
export class FriendModule {}
