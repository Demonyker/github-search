import { browser, by, element , ElementFinder, ElementArrayFinder} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get("/search") as Promise<any>;
  }
  navigateToMyList() {
    return browser.get("/my-list") as Promise<any>;
  }

  getSearchPage(){
    return element(by.tagName('app-search'));
  }
  
  getSearchButton() {
    return this.getSearchPage().element(by.buttonText("SEARCH"))
  }

  isSearchButtonPresent() {
    return this.getSearchButton().isPresent();
  }

  clickSearchButton() {
    return this.getSearchButton().click();
  }

  getRepoListComponent() {
    return element(by.tagName('app-repo-list'))
  }

  getResultNotFound() {
    return this.getSearchPage().element(by.className("repositories-not-found'"));
  }

  isResultNotFoundPresent() {
    return this.getResultNotFound().isPresent();
  }
  
  getListOfLanguages() {
    return this.getSearchPage().element(by.className("search-place__language"));
  }
  
  getPause() {
    return browser.sleep(5000);
  }

  isListOfLanguagesPresent() {
    return this.getListOfLanguages().isPresent();
  }

  clickOnLanguagesList() {
    return this.getListOfLanguages().click();
  }

  chooseLanguage() {
    return this.getSearchPage().element(by.buttonText("Javascript"));
  }

  clickOnLanguage() {
    return this.chooseLanguage().click();
  }

  getInput() {
    return this.getSearchPage().element(by.className("search-place__input"));
  }

  putNewValueInInut() {
    return this.getInput().sendKeys('react');
  }

  getRepoList() {
    return element(by.tagName("app-repo-list"));
  }

  getBarButton() {
    return this.getRepoList().element(by.className("plitka"));
  }

  clickBarButton() {
    return this.getBarButton().click();
  }
  
  getBarView() {
    return this.getRepoList().element(by.className("view-repo-plitka"));
  }

  getListButton() {
    return this.getBarView().element(by.className("spisok"));
  }

  clickListButton() {
    return this.getListButton().click();
  }

  getAddFirstButton() {
    return this.getRepoList().element(by.className("add-repo-tolist"));
  }

  clickOnFirstAddButton() {
    return this.getAddFirstButton().click();
  }

  getMainAppRoot() {
    return element(by.tagName("app-root"))
  }

  getSwitchOnMyListButton() {
    return this.getMainAppRoot().element(by.className("mylist-page"));
  }

  getAddRepoBarButton() {
    return this.getRepoList().element(by.className("add-repo-to-list"));
  }

  clickAddRepoBarButton() {
    return this.getAddRepoBarButton().click();
  }
}
