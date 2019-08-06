import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  languages = ['Javascript', 'css', 'html', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel'];
  types = ['Repositories'];
  currentType = 'Type';
  languagesListOpen = false;
  typesListOpen = false;
  constructor(private githubApi: GithubApiService) { }

  ngOnInit() {
  }
  chooseLanguage(language) {
    this.githubApi.choosedLanguage = language;
  }
  chooseType(type) {
    this.currentType = type;
  }
  languagesListStatus() {
    return this.languagesListOpen;
  }
  openList() {
    if (this.languagesListOpen === false) {
    this.languagesListOpen = true;
    } else if (this.languagesListOpen === true) {
      this.languagesListOpen = false;
    }
  }
  openTypes() {
    if (this.typesListOpen === false) {
      this.typesListOpen = true;
      } else if (this.typesListOpen === true) {
        this.typesListOpen = false;
      }
  }
  searchRepositories(inputTopic) {
    this.githubApi.apiRequest(inputTopic.value);
  }
}
