(function(exports) {

  //constructor
  function NoteController(text, myNoteList = new NoteList(), NoteConstructor = Note, NoteListViewConstructor = NoteListView ) //Default arguments
  {
    this.myNoteList = myNoteList; //Store instance of NoteList

    this.myNoteList.store(text, NoteConstructor); //Create Note and store in NoteList

    this.myNoteListView = new NoteListViewConstructor(this.myNoteList); // Add instance of NoteList to NoteListView
  }

  NoteController.prototype.renderText = function() {
      // console.log(this.myNoteListView.render());
      // console.log('x');
      // console.log(this.myNoteListView.render());
      document.getElementById('app').innerHTML = this.myNoteListView.render();
  };

  exports.NoteController = NoteController;

})(this);
