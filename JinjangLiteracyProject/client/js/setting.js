Template.setting.rendered = function(){
  $("#setting").addClass('active');
  $("#home").removeClass('active');
  $("#aboutUs").removeClass('active');
  $("#events").removeClass('active');
  $("#donate").removeClass('active');
  $("#login").removeClass('active');
}

Template.setting.helpers({
  email: function(){
    return Meteor.user().emails[0].address;
  },

  username: function(){
    return Meteor.user().username;
  },

  name: function(){
    return Meteor.user().profile.name;
  },
});

Template.setting.events({
  "click #updateBtn": function(e){
    e.preventDefault();
    $('#eventsModal').modal('show');
  },

  "click #saveNewProfile": function(){
    $('#eventsModal').modal('hide');

    var newUsername = document.getElementById("newUsername").value;
    var newEmail = document.getElementById("newEmail").value;
    var newName = document.getElementById("newName").value;

    Bert.alert("Profile successfully updated", "success", "growl-top-right");
    Meteor.users.update(Meteor.userId(), {
          $set: {
            username: newUsername,
            'emails.0.address': newEmail,
            "profile.name": newName,
          }
        });
      }
});
