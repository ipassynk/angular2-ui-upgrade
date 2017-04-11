import { Angular2UiGridPage } from './app.po';

describe('angular2-ui-grid App', () => {
  let page: Angular2UiGridPage;

  beforeEach(() => {
    page = new Angular2UiGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
