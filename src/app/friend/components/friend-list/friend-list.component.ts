import { Component } from '@angular/core';
import { IFriend } from '../../interface';
import { friends } from '../../data';
import { shuffle } from 'd3-array';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent {
  friends: IFriend[] = [];

  ngOnInit(): void {
    this.friends = shuffle(friends);
  }
}
