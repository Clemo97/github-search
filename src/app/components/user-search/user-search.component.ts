import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/class/User/users';
import { UsernameInput } from 'src/app/class/UsernameInput/username-input';
import { UserRepos } from 'src/app/class/UserRepos/user-repos';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  faSearch = faSearch;

  searchedUser = new UsernameInput();
  searchedUser1 = new UsernameInput();
  user: Users = new Users();
  userRepos: UserRepos = new UserRepos();

  submitUsername() {
    this.searchedUser1 = this.searchedUser;
    this.userService.searchUser(this.searchedUser1.username);
    this.user = this.userService.user;
    this.userRepos = this.userService.userRepos;
    this.searchedUser = new UsernameInput();
  }

  constructor(private userService: SearchUserService) { }

  ngOnInit() {

  }
}
