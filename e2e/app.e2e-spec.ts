import { PathfinderCharacterGenPage } from './app.po';

describe('pathfinder-character-gen App', function() {
  let page: PathfinderCharacterGenPage;

  beforeEach(() => {
    page = new PathfinderCharacterGenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
