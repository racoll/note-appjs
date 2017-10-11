(function(exports) {

  function Note(text) { // constructor function
    this.text = text;
  }

  Note.prototype.getText = function() { //prototype function
    return this.text;
  };

  exports.Note = Note;  //does the nme of exports mtter? wht rae you ctully doing here\??



})(this);

what is a statement - // statements are executed one by one in the same order they are writen, separated by semi colons.
// In HTML, statements are instructions to be executed by the web browser
what is a function - // a block of code designed to perform a particular task. It is executed when something invokes (calls) it.
what is an annonoymous function - //  a no-named function that is stored in a variable. They are always invoked using the variable name.
what is an immediately invoked function - // IIFE - to obtain data privacy. any variables declared within the IIFE cannot be accessed by the outside.

what is 'this' how does it change and why - 
