import { SwitchProjectPage } from './app.po';

describe('switch-project App', () => {
  let page: SwitchProjectPage;

  beforeEach(() => {
    page = new SwitchProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
