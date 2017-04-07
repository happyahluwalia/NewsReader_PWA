import { browser, element, by } from 'protractor';

export class NewsreaderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nw-root h1')).getText();
  }
}
