(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.display = function() {
    return this.list;
  };

  NoteList.prototype.store = function(text, NoteConstructor = Note) { // this noteConstructor is a deafult in the argument
    var note = new NoteConstructor(text);
    this.list.push(note);
  };

  exports.NoteList = NoteList;

})(this);
