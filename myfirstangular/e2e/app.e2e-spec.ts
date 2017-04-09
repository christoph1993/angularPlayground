import { MylibraryAngularPage } from './app.po';

describe('mylibrary-angular App', () => {
  let page: MylibraryAngularPage;

  beforeEach(() => {
    page = new MylibraryAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
