export class GithubApiService {
    choosedLanguage = 'Language';
    topics = [];
    results = [];
    myRepoList = [];
    notFoundResult: boolean;
    check: boolean;
    repositoriesList = [];
    myListPage = false;
    searchPage = false;
    inputTopics = false;
    viewButtons = false;
    keyWords = '';
    plitkaDisplay = false;
    listDisplay = true;
    buttonStatus = 'ADD TO LIST';
    noMainPage = false;
    constructor() {}
    apiRequest(topic) {
        this.keyWords = topic;
        this.topics = topic.split(' ');
        this.results = [];
        this.repositoriesList.length = 0;
        this.results.length = 0;
        if (this.choosedLanguage === 'Language') {
            this.notFoundResult = true;
            return this.notFoundResult;
        }
        fetch(`https://api.github.com/search/repositories?q=language:${this.choosedLanguage}+topic:${topic}`)
        .then( response => {
            return response.json();
        })  
        .then( result => {
            result.items.forEach(item => {
                item.repoAdded = false;
                item.buttonStatus = "ADD TO LIST";
                this.myRepoList.forEach( repo => {
                    if(repo.full_name === item.full_name) {
                        item.repoAdded = true;
                        item.buttonStatus = "REMOVE FROM LIST";
                    }
                })
                this.results.push(item);
                this.repositoriesList.push(item);
                item.searchKeywords = [];
                item.searchKeywords.push(item.language);
                if (topic != '') {
                    this.topics.forEach( topic => {
                        item.searchKeywords.push(topic);
                    })
                }
            });
            if (this.repositoriesList.length > 0) {
                this.viewButtons = true;
            }
            if (this.results.length > 0) {
                this.notFoundResult = false;
            } else if (this.results.length === 0) {
                this.notFoundResult = true;
                this.viewButtons = false;
            }
        })
        
    }
    addRepoToMyList(repo) {
        let repoLenght = this.myRepoList.length;
        let check = true;
        for (let i = 0; i < repoLenght; i += 1) {
            let myRepo = this.myRepoList.shift();
            if (myRepo === repo) {
                check = false; 
            } else {
                this.myRepoList.push(myRepo);
            }
        }
        if (check != false) {
            repo.repoAdded = true;
            repo.buttonStatus = "REMOVE FROM LIST"
            this.myRepoList.push(repo);
        } else if (check === false) {
            repo.repoAdded = false;
            repo.buttonStatus = "ADD TO LIST"
        }
        if (this.myListPage === true) {
            this.repositoriesList.length = 0;
            this.myRepoList.forEach (repo => {
                this.repositoriesList.push(repo);
            })
        }
    }
    switchOnMyList() {
        this.noMainPage = true;
        this.repositoriesList.length = 0;
        this.myRepoList.forEach( repo => {
            this.repositoriesList.push(repo);
        })
        this.myListPage = true;
        this.searchPage = false;
    }
    switchOnSearch() {
        this.noMainPage = true;
        this.repositoriesList.length = 0;
        this.results.forEach( result => {
            let repoCheck = 0;
            this.myRepoList.forEach( repo => {
                if (result === repo ) {
                    repoCheck += 1;
                }
            })
            if (repoCheck === 0) {
                result.repoAdded = false;
                result.buttonStatus = "ADD TO LIST"
            }
            this.repositoriesList.push(result);
        })
        this.myListPage = false;
        this.searchPage = true;
    }
    inputTopic(topic) {
        if (topic.value.length > 0) {
            this.inputTopics = true;
        } else if (topic.value.length === 0) {
            this.inputTopics = false;
        }
    }
    changeViewOnPlitka() {
        this.plitkaDisplay = true;
        this.listDisplay = false;
      }
    changeViewOnList() {
        this.plitkaDisplay = false;
        this.listDisplay = true;
    }
}