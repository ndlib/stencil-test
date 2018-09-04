import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'cycle-viewer',
  shadow: true
})

export class CycleViewer {

  @Event({eventName: 'cycleClicked' }) cycleClicked: EventEmitter<any>;

  onClickHandler() {
    this.cycleClicked.emit({cycleClicked: true});
  }

  render() {
    return (
      <button onClick={() => this.onClickHandler()}>Cycle!</button>
    )
  }
}
