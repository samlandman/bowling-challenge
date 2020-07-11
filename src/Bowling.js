'use strict';

class BowlingGame {
  constructor() {
    this.score = 0;
    this.frameArray = [];
  };

  startgame() {
    for (var n=0;n<=10; n++) {
    this.frameArray << new Frame(n);
    };
  }
};