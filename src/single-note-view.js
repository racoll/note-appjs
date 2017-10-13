(function(exports) {

  function SingleNoteView(note = new Note) {
    this.note = note;
  }

  SingleNoteView.prototype.render = function() {
    return '<div>'+this.note.getText()+'</div>';
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
