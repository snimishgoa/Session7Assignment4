import { Session7Assignment4Page } from './app.po';

describe('session7-assignment4 App', () => {
  let page: Session7Assignment4Page;

  beforeEach(() => {
    page = new Session7Assignment4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
