import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'gituser', component: BodyComponent},
  { path: 'repositories', component: RepoSearchComponent},
  { path: '', redirectTo:"gituser", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
