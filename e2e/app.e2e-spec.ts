import { NewsreaderPage } from './app.po';

describe('newsreader App', () => {
  let page: NewsreaderPage;

  beforeEach(() => {
    page = new NewsreaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nw works!');
  });
});
