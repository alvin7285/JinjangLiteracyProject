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
