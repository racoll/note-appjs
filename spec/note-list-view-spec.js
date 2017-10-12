(function(exports) {
 function testNoteListViewDisplaysHTML() {
   var view = new NoteListView();
   var notelist = view.list;

  if (view.render() !== "There are no notes!" ) {
     throw new Error("There are no notes");
   }

  var text = "testing text";
  notelist.store(text);

  var entries = notelist.display();
   var firstEntry = entries[0];
   var firstNote = firstEntry.getText();


  if (view.render() !== "<ul><li><div>"+text.substring(0,20)+"</div></li></ul>" ) {
     throw new Error("Not showing text");
   }
 };

testNoteListViewDisplaysHTML();
})(this);
