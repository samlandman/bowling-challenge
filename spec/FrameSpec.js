'use strict';

describe("Frame Class", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should have a default of 'Still to Play'", function() {
    expect(frame.firstRoll).toEqual("Still to Play");
  });
  

});
