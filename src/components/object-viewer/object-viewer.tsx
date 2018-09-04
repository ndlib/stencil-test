import { Component, Prop, Method, State, Listen } from '@stencil/core';

@Component({
  tag: 'object-viewer',
  styleUrl: 'object-viewer.css',
  shadow: true
})

export class ObjectViewer {

  @Prop() urls: string;
  @State() currentFileData: string;
  currentFileIndex: number = 0;
  files: Array<string>;

  componentWillLoad() {
    this.files = JSON.parse(this.urls)
    this.fetchCurrentFile()
  }

  @Listen('cycleClicked')
  log() {
    this.nextFile()
  }

  getCurrentFile() {
    if (!this.files) {
      this.files = JSON.parse(this.urls)
    }
    return this.files[this.currentFileIndex]
  }

  @Method() nextFile() {
    this.currentFileIndex += 1;
    if (this.currentFileIndex > 2) {
      this.currentFileIndex = 0;
    }

    this.fetchCurrentFile()
    return this.currentFileIndex;
  }

  setCurrentFileData(data) {
    this.currentFileData = data
  }

  fetchCurrentFile() {
    fetch(this.getCurrentFile())
    .then(res => res.json())
    .then(response => this.setCurrentFileData(JSON.stringify(response)))
    .catch(function(err) {
      this.error(err);
    }.bind(this));
  }

  render() {
    return (
      <div>
        <slot />
        {this.currentFileData}
      </div>
    );
  }
}
