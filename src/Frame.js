'use strict';

class Frame {
  constructor() {
    this.firstRoll = 'Still to Play'
    this.secondRoll = 'Still to Play'
    this.special = 'normal'
  };
  rollOne(number) {
    this.firstRoll = number
    if(number==10) {
      this.special = 'Strike'
      this.secondRoll = 'Strike'
    }
  };
  rollTwo(number) {
    if(this.secondRoll=='Strike') {
      throw Error('Strike, so invalid') ;
    } else {
    this.secondRoll = number;
    };
  };
};