

(function(exports) {

  function testNoteController() {

    var text = "Favourite drink: seltzer"; //Create something to test
    console.log("hi it's working!")
    myNoteController = new NoteController(text);

    myNoteController.renderText();

    var appContent = document.getElementById('app').innerHTML; //Contents of div with id = app

    var expected = "<ul><li><div>"+text.substring(0,20)+"</div></li></ul>";
    console.log(appContent);
    console.log(expected);
    assert.isTrue(appContent === expected);
}

  testNoteController();
})(this);
