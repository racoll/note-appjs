(function(exports) {

  function testNoteListStoresNotes() {

    var notelist = new NoteList();
    notelist.store("test");

    var entry = notelist.display();

    var entry1 = entry[0];

    if (entry1.getText() !== "test") {
    throw new Error("Not stroring notes");
  }
  // assert.isTrue(entry1.text === "test");
}

  testNoteListStoresNotes();
})(this);
