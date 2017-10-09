(function() {
  var note = new Note("hello");
  assert.isTrue(note.text() === "hello");
})();
