import { NgZorroMobilePage } from './app.po';

describe('ng-zorro-antd-mobile App', function() {
  let page: NgZorroMobilePage;

  beforeEach(() => {
    page = new NgZorroMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
