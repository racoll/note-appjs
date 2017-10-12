

(function(exports) {

  function testSingleNoteView() {

    //Create something to test
    var myNote = new Note('Favourite drink: seltzer');
    var mySingelNoteView = new SingleNoteView(myNote);
    var actual = mySingelNoteView.render();

    var expected = '<div>Favourite drink: seltzer</div>';

    assert.isTrue(actual === expected);
}

  testSingleNoteView();
})(this);
