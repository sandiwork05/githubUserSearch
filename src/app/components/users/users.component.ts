import { Component, Input, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() user: any;
  followers = [];
  following = [];
  repos = [];
  totalFollowing = 10;
  dataLoaded = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    combineLatest(
      this.userService.getFollowers(this.user.login),
      this.userService.getFollowing(this.user.login),
      this.userService.getRepository(this.user.login),
    ).subscribe((response: any) => {
      this.followers = response[0];
      this.following = response[1];
      this.repos = response[2];
      this.totalFollowing = this.following.length < 10 ? 10 : this.following.length;
      this.dataLoaded = true;
    });
  }

  onFollowingClick() {
    this.totalFollowing += 10;
  }

}
