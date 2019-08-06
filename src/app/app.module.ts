import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { GithubApiService } from './github-api.service';
import { SearchPageComponent } from './search-page/search-page.component';
import { MylistPageComponent } from './mylist-page/mylist-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'search', component: SearchPageComponent},
  {path: 'my-list', component: MylistPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoListComponent,
    SearchPageComponent,
    MylistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
