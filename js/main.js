'use strict';

{
  class Panel() {
    constructor() {
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
    }
  }
  
  class Board {
    constructor() {
      this.panels = [];
      for (let i = 0; i < 4; i++) {
        this.panels.push(new this.Panel());
      }
    }
  }

  const board = new Board();
}