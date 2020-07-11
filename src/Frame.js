'use strict';

class Frame {
  constructor(round = 0) {
    this.round = round
    this.firstRoll = 'Still to Play'
    this.secondRoll = 'Still to Play'
    this.special = 'normal'
    this.score = 0
  };

  rollOne(number) {
    this.firstRoll = number
    this.score = number
    if(number==10) {
      this.special = 'Strike'
      this.secondRoll = 'Strike'
      this.score = 10
    };
  };

  rollTwo(number) {
    if(this.secondRoll=='Strike') {
      throw Error('Strike, so invalid') ;
    } else {
    this.secondRoll = number;
    this.score = this.score + this.secondRoll;
    };
    if (this.firstRoll + this.secondRoll == 10) {
      this.special = 'Spare';
    };
  };

};