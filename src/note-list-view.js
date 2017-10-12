(function(exports) {

function NoteListView(MyConstructor = new NoteList()) {
   this.list = MyConstructor;
 }

NoteListView.prototype.render = function(){
   var entries = this.list.display();
   var entriesCount = entries.length;

  if(entries.length === 0){
     return "There are no notes!"
   }

  if (entries.length > 0){
     var view = ["<ul>"];
     for (i = 0; i < entriesCount; i++){
       var note = entries[i];
       var noteText = note.getText();
       noteText = noteText.substring(0, 20);
       view.push("<li><div>"+noteText+"</div></li>");
     }
     view.push("</ul>");
     return view.join('');
   };
 };

exports.NoteListView = NoteListView;
})(this);
