import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  repoitems: any[] = [];
  repoName:string= "github-search";

  constructor(private DataService: DataService) {

  }

  findRepo () {
    this.DataService.UpdateRepo(this.repoName);
    this.DataService.searchrepos().subscribe(repo => {

      this.repoitems = repo["items"];
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }

}
