import { Angular2UiUpgradePage } from './app.po';

describe('angular2-ui-upgrade App', () => {
  let page: Angular2UiUpgradePage;

  beforeEach(() => {
    page = new Angular2UiUpgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
