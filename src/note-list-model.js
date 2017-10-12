(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.display = function() {
    return this.list;
  };

  NoteList.prototype.store = function(text, noteConstructor = Note) { // this noteConstructor is a deafult in the argument
    var note = new noteConstructor(text);
    this.list.push(note);
  };

  exports.NoteList = NoteList;

})(this);
