import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { GithubApiService } from './github-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
