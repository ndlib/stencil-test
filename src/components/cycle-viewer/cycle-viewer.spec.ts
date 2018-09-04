import { TestWindow } from '@stencil/core/testing';
import { CycleViewer } from './cycle-viewer';

describe('my-component', () => {
  it('should build', () => {
    expect(new CycleViewer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMyComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CycleViewer],
        html: '<cycle-viewer></cycle-viewer>'
      });
    });

    it('should have the text cycle', () => {
      expect(element.innerHTML.trim()).toEqual('<button>Cycle!</button>');
    });

    it('shoule emit a cycle event', () => {
      /*
      for (var property in element.lastElementChild) {
        console.log(property)
        console.log(element[property])
      }
      */
      //console.log("last")
      //console.log(testWindow);
      console.log(element.onClickHandler())
      //console.log(element.lastElementChild.click())
    });
  });
});
