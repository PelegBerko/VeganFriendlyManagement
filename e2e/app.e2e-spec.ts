import { VeganFriendlyManagementPage } from './app.po';

describe('vegan-friendly-management App', function() {
  let page: VeganFriendlyManagementPage;

  beforeEach(() => {
    page = new VeganFriendlyManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
