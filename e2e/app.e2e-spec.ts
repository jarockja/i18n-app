import { I18nAppPage } from './app.po';

describe('i18n-app App', function() {
  let page: I18nAppPage;

  beforeEach(() => {
    page = new I18nAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
