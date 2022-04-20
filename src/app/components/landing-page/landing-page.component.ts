import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/class/User/users';
import { UserRepos } from 'src/app/class/UserRepos/user-repos';
import { SearchUserService } from 'src/app/services/SearchUser/search-user.service';
import { DatePipePipe } from 'src/app/pipes/date-pipe/date-pipe.pipe';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [DatePipePipe]
})
export class LandingPageComponent implements OnInit {

  user: Users = new Users();
  userRepos: UserRepos = new UserRepos();

  constructor(private userService: SearchUserService) { }

  ngOnInit() {
    this.userService.searchUser("Collin9726");
    this.user = this.userService.user;
    this.userRepos = this.userService.userRepos;
  }

}

