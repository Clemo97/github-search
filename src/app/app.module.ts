import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatecountPipe } from './datecount.pipe';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    DatecountPipe,
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    RepoSearchComponent,
    NotFoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
