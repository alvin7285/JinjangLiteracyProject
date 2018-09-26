Template.children.events({
  "submit .upload": function(event) {
      var uploadFile = event.target.uploadFile.value;

      console.log(uploadFile);
    }
});
