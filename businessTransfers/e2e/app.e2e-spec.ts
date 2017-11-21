import { BusinessTransfersPage } from './app.po';

describe('business-transfers App', () => {
  let page: BusinessTransfersPage;

  beforeEach(() => {
    page = new BusinessTransfersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
