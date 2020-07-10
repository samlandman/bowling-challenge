'use strict';

describe("Frame Class", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("First Roll should have a default of 'Still to Play'", function() {
    expect(frame.firstRoll).toEqual("Still to Play");
  });

  it("Second Roll should have a default of 'Still to Play'", function() {
    expect(frame.secondRoll).toEqual("Still to Play");
  });
  
  it("Roll 1 is 5, and goes into first roll", function() {
    frame.rollOne(5);
    expect(frame.firstRoll).toEqual(5);
  });

  it("Roll 1 is 10, and goes into first roll", function() {
    frame.rollOne(10);
    expect(frame.firstRoll).toEqual(10);
    expect(frame.special).toEqual("Strike");
  });

  it("Roll 1 is 10, so second roll is 'Strike'", function() {
    frame.rollOne(10);
    expect(frame.secondRoll).toEqual("Strike");
  });

  it("Roll 1 is 10, so second roll should not be allowed", function() {
    frame.rollOne(10);
    expect(function() {frame.rollTwo(1)}).toThrow(Error('Strike, so invalid'));
  });

  it("Roll 1 is 5, and goes into first roll. Roll 2 is a 3 and goes into second roll", function() {
    frame.rollOne(5);
    frame.rollTwo(3)
    expect(frame.firstRoll).toEqual(5);
    expect(frame.secondRoll).toEqual(3);
  });

});
