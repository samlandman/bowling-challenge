'use strict';

describe("Bowling Game", function() {
  var bowling;

  beforeEach(function() {
    bowling = new BowlingGame();
  });

  it("should have a starting score of 0", function() {
    expect(bowling.score).toBe(0);
  });

  it("should have an empty frame array", function() {
    expect(bowling.frameArray).toEqual([]);
  });

});
