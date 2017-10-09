(function() {
  var note = new Note("hello");
  assert.isTrue(note.getText() === "hello");
})();

(function() {
  var note = new Note("Luan VP");
  assert.isTrue(note.getText() === "Luan VP");
})();
