Template.home.rendered = function(){
  $("#home").addClass('active');
  $("#aboutUs").removeClass('active');
  $("#events").removeClass('active');
  $("#donate").removeClass('active');
  $("#volunteer").removeClass('active');
  $("#login").removeClass('active');
  $("#setting").removeClass('active');
}

Template.navBar.helpers({
  admin: function(){
    if(Meteor.user() && Meteor.user().username === 'admin123'){
      return 'admin';
    }
    else{
      return false;
    }
  }
});
