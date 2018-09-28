Template.children.events({
  "click #uploadButton": function() {
      Bert.alert("File has been uploaded", "success", "growl-top-right");
      var uploadedFile = document.getElementById('uploadFile').files[0];
      readFile(uploadedFile, function(content) {
        Meteor.call('upload',content);
       });
     },


});

readFile = function(uploadedFile,onLoadCallback) {
   var reader = new FileReader();
   reader.onload = function (e){
    var contents= e.target.result;
    onLoadCallback(contents);
   }
   reader.readAsText(uploadedFile);
  };
