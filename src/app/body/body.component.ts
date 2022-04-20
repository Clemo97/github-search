import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  user: any;
  userRepos:any;
  username: string = 'Clemo97'
  imageWidth: number = 150;
  imageHeight: number = 200;

  constructor(private DataService: DataService) {

  }


  findUser () {
    this.DataService.UpdateUser(this.username);

    this.DataService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.DataService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }

  ngOnInit() {
    this.findUser()
  }

}
