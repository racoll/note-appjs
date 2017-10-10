(function(exports) {
 function testNoteListViewDisplaysHTML() {
   var view = new NoteListView();
   var notelist = view.list;

  if (view.render() !== "There are no notes!" ) {
     throw new Error("There are no notes");
   }

  notelist.store("testing text");

  var entries = notelist.display();
   var firstEntry = entries[0];
   var firstNote = firstEntry.getText();

  if (view.render() !== "<ul><li><div>testing text</div></li></ul>" ) {
     throw new Error("Not showing text");
   }
 };

testNoteListViewDisplaysHTML();
})(this);
