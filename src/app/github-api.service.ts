export class GithubApiService {
    choosedLanguage = '';
    topics = [];
    results = [];
    tags = [];
    myRepoList = [];
    notFoundResult: boolean;
    plitkaDisplay: boolean;
    check: boolean;
    repositoriesList = [];
    myListPage = false;
    searchPage = true;
    inputTopics = false;
    viewButtons = false;
    constructor() {}
    apiRequest(topic) {
        this.topics = topic.split(' ');
        this.results = [];
        this.tags = [];
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
    addRepoToMyList(button, repo) {
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
            this.myRepoList.push(repo);
        } else if (check === false) {
            repo.repoAdded = false;
        }
        if (this.myListPage === true) {
            this.repositoriesList.length = 0;
            this.myRepoList.forEach (repo => {
                this.repositoriesList.push(repo);
            })
        }
        if (button) {
            if (repo.repoAdded === true) {
            button.innerHTML = "REMOVE FROM LIST"
            } else if (repo.repoAdded === false) {
                button.innerHTML = "ADD TO LIST"
            }
        }
    }
    switchOnMyList() {
        this.repositoriesList.length = 0;
        this.myRepoList.forEach( repo => {
            this.repositoriesList.push(repo);
        })
        this.myListPage = true;
        this.searchPage = false;
    }
    switchOnSearch() {
        this.repositoriesList.length = 0;
        this.results.forEach( repo => {
            this.repositoriesList.push(repo);
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
}