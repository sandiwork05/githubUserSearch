import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string;
  users;

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  search() {
    this.userService.search(this.username)
      .subscribe((res: any) => {
        this.users = res.items;
      })
  }
}
