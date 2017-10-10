(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.display = function() {
    return this.list;
  };

  NoteList.prototype.store = function(text) {
    var note = new Note(text);
    this.list.push(note);
  };

  exports.NoteList = NoteList;

})(this);
