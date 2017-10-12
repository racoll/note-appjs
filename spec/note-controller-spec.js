

(function(exports) {

  function testNoteController() {

    //Create something to test
    myNoteController = new NoteController('Favourite drink: seltzer');

    myNoteController.renderText();

    var appContent = document.getElementById('app').innerHTML; //Content of div with id = app

    var expected = '<ul><li><div>Favourite drink: seltzer</div></li></ul>';
    console.log(appContent);
    console.log(expected);
    assert.isTrue(appContent === expected);
}

  testNoteController();
})(this);
