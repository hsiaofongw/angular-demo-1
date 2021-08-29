import { Component, Input } from '@angular/core';
import { IFriend } from '../../interface';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent {

  @Input()
  friend?: IFriend;

  handleClick(friend: IFriend) {
    window.open(friend.websiteURL, '_blank');
  }

}
