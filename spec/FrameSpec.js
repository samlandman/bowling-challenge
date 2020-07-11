'use strict';

describe("Frame Class", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(0);
  });

  it("First Roll should have a default of 'Still to Play'", function() {
    expect(frame.firstRoll).toEqual("Still to Play");
  });

  it("Second Roll should have a default of 'Still to Play'", function() {
    expect(frame.secondRoll).toEqual("Still to Play");
  });

  it("Round should have a default of 0", function() {
    expect(frame.round).toEqual(0);
  });

  it("Round should be allowed to be defined in initialise", function() {
    var round2 = new Frame(2);
    expect(round2.round).toEqual(2);
  });
  
  it("Roll 1 is 5, and goes into first roll", function() {
    frame.rollOne(5);
    expect(frame.firstRoll).toEqual(5);
    expect(frame.score).toEqual(5);
  });

  it("Roll 1 is 10, and goes into first roll", function() {
    frame.rollOne(10);
    expect(frame.firstRoll).toEqual(10);
    expect(frame.special).toEqual("Strike");
    expect(frame.score).toEqual(10);
  });

  it("Roll 1 is 10, so second roll is 'Strike'", function() {
    frame.rollOne(10);
    expect(frame.secondRoll).toEqual("Strike");
    expect(frame.score).toEqual(10);
  });

  it("Roll 1 is 10, so second roll should not be allowed", function() {
    frame.rollOne(10);
    expect(function() {frame.rollTwo(1)}).toThrow(Error('Strike, so invalid'));
    expect(frame.score).toEqual(10);
  });

  it("Roll 1 is 5, and goes into first roll. Roll 2 is a 3 and goes into second roll", function() {
    frame.rollOne(5);
    frame.rollTwo(3)
    expect(frame.firstRoll).toEqual(5);
    expect(frame.secondRoll).toEqual(3);
    expect(frame.score).toEqual(8);
  });

  it("Roll 1 is 5, and goes into first roll. Roll 2 is 5, so goes into second, and Spare in special", function() {
    frame.rollOne(5);
    frame.rollTwo(5);
    expect(frame.firstRoll).toEqual(5);
    expect(frame.secondRoll).toEqual(5);
    expect(frame.special).toEqual('Spare');
    expect(frame.score).toEqual(10);
  });

  it("Roll 1 is 5, and goes into first roll. Roll 2 is 5, so goes into second, and Spare in special", function() {
    frame.rollOne(6);
    frame.rollTwo(4);
    expect(frame.firstRoll).toEqual(6);
    expect(frame.secondRoll).toEqual(4);
    expect(frame.special).toEqual('Spare');
    expect(frame.score).toEqual(10);
  });

  it("Roll 1 is 11, expect score to be exception, and ignore input")

  it("Roll 1 + Roll 2 is 11, expect score to be exception, and ignore input")



  it("Roll 1 is 5, expect score to be 5", function() {
    frame.rollOne(5);
    expect(frame.score).toEqual(5);
  });

});
