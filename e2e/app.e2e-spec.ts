import { NgxDragDropPage } from './app.po';

describe('ngx-drag-drop App', () => {
  let page: NgxDragDropPage;

  beforeEach(() => {
    page = new NgxDragDropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
