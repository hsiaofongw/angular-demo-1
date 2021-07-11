import { Component, OnInit } from '@angular/core';
import { IFriend } from '../../interface';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friends: IFriend[] = [];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getAllFriends().subscribe(queryResult => {
      if (queryResult.statusCode >= 200 && queryResult.statusCode < 400) {
        this.friends = queryResult.result;
      }
    });
  }

}
