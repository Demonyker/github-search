import { Component } from '@angular/core';
import { GithubApiService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private githubApi: GithubApiService) { }
  title = 'github-search';
}
