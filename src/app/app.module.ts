import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitLibComponent } from './components/git-lib/git-lib.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RepoSearchComponent } from './components/repo-search/repo-search.component';
import { UserSearchComponent } from './components/user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GitLibComponent,
    LandingPageComponent,
    NotFoundComponent,
    RepoSearchComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
