import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should click button SEARCH and display no results found', () => {
    expect(page.isSearchButtonPresent()).toBeTruthy();
    expect(page.isResultNotFoundPresent()).toBeFalsy();
    page.clickSearchButton();
  });

  it('should find repositories with Javascrpit language', () => {
    expect(page.isSearchButtonPresent()).toBeTruthy();
    expect(page.isResultNotFoundPresent()).toBeFalsy();
    expect(page.isListOfLanguagesPresent()).toBeTruthy();
    page.clickOnLanguagesList();
    page.clickOnLanguage();
    page.clickSearchButton();
    page.getPause();
  });

  it('should find repositories with Javascrpit language and react topic', () => {
    expect(page.isSearchButtonPresent()).toBeTruthy();
    expect(page.isResultNotFoundPresent()).toBeFalsy();
    expect(page.isListOfLanguagesPresent()).toBeTruthy();
    page.clickOnLanguagesList();
    page.clickOnLanguage();
    page.putNewValueInInut();
    page.clickSearchButton();
    page.getPause();
  });

  it('should find repositories with Javascrpit language and react topic and switch on bar and back on list', () => {
    expect(page.isSearchButtonPresent()).toBeTruthy();
    expect(page.isResultNotFoundPresent()).toBeFalsy();
    expect(page.isListOfLanguagesPresent()).toBeTruthy();
    page.clickOnLanguagesList();
    page.clickOnLanguage();
    page.putNewValueInInut();
    page.clickSearchButton();
    page.getPause();
    page.clickBarButton();
    page.getPause();
    page.clickListButton();
    page.getPause();
  });
  it('should find repositories with Javascrpit language and react click first repo add button', () => {
    expect(page.isSearchButtonPresent()).toBeTruthy();
    expect(page.isResultNotFoundPresent()).toBeFalsy();
    expect(page.isListOfLanguagesPresent()).toBeTruthy();
    page.clickOnLanguagesList();
    page.clickOnLanguage();
    page.putNewValueInInut();
    page.clickSearchButton();
    page.getPause();
    page.clickOnFirstAddButton();
    page.getPause();
  });
  it('should find repositories with Javascrpit language and react click first repo add button in Bar view and back', () => {
    expect(page.isSearchButtonPresent()).toBeTruthy();
    expect(page.isResultNotFoundPresent()).toBeFalsy();
    expect(page.isListOfLanguagesPresent()).toBeTruthy();
    page.clickOnLanguagesList();
    page.clickOnLanguage();
    page.putNewValueInInut();
    page.clickSearchButton();
    page.getPause();
    page.clickBarButton();
    page.getPause();
    page.clickAddRepoBarButton();
    page.getPause();
    page.clickListButton();
    page.getPause();
  });
});
