import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service'

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  plitkaDisplay = false;
  listDisplay = true;
  constructor(private githubApi: GithubApiService) { }

  ngOnInit() {
  }
  
  starsNumber(stars) {
    if(stars > 1000) {
      let delStars = `${stars}`.split('');
      delStars.splice(-3);
      let resStars = delStars.join('');
      return (resStars + 'k'); 
    } else {
      return stars;
    }
  }
}
