

(function(exports) {

  function testSingleNoteView() {

    //Create something to test
    var myNote = new Note(mytext);
    var mySingelNoteView = new SingleNoteView(myNote);
    var actual = mySingelNoteView.render();

    var expected = '<div>'+ mytext +'</div>';

    assert.isTrue(actual === expected);
}

  testSingleNoteView();
})(this);
