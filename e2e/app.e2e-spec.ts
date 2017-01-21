import { GoogleMapAngular2Page } from './app.po';

describe('google-map-angular2 App', function() {
  let page: GoogleMapAngular2Page;

  beforeEach(() => {
    page = new GoogleMapAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
