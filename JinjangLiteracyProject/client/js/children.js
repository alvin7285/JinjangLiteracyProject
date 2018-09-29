Template.children.helpers({
  children: function() {
  	var children = Children.find({}, {sort: {createdAt: -1}});
		return children;
	}
});

Template.children.events({
  "click #uploadButton": function() {
      var uploadedFile = document.getElementById('uploadFile').files[0];
      if (uploadFile.value !=""){
        readFile(uploadedFile, function(content) {
          Bert.alert("File has been uploaded", "success", "growl-top-right");
          Meteor.call('upload',content);
         });
      }
      else{
        Bert.alert("Please insert a file", "danger", "growl-top-right");
      }

     },
  "click #removeChildren": function(){
    if (confirm("Confirm to delete this event?") == true){
      Meteor.call('removeChildren');
      Bert.alert("All children info have been removed", "success", "growl-top-right");
    }
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
