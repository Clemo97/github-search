import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  username: string = "Clemo97";
  repoName: string = "github-search";
  clientId: string = "7ee6c11861570c3bab7b";
  clientSecret: string = "e21bf95a5fc39f4bc5085646d5367a0ede02e9df";
  apikey:string='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';
  constructor(private http: HttpClient) {
    console.log('service is now ready');
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }

}
