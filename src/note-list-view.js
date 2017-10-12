(function(exports) {

function NoteListView() {
   this.list = new NoteList();
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
       view.push("<li><div>"+noteText+"</div></li>");
     }
     view.push("</ul>");
     return view.join('');
   };
 };

exports.NoteListView = NoteListView;
})(this);
