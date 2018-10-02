Template.createEvents.rendered = function(){
  $("#events").addClass('active');
  $("#home").removeClass('active');
  $("#aboutUs").removeClass('active');
  $("#donate").removeClass('active');
  $("#volunteer").removeClass('active');
  $("#login").removeClass('active');
  $("#setting").removeClass('active');
}

Template.createEvents.events({
  "submit .eventForm" : function(){
    var eventPicture = event.target.eventPicture.files[0].name;
    var title = event.target.title.value;
    var date = (event.target.date.value).toString();
    var timeFrom = (event.target.timeFrom.value).toString();
    var timeTo = (event.target.timeTo.value).toString();
    var description = event.target.description.value;

    if(notEmpty(title) && notEmpty(description)){
      Meteor.call('addEvent',eventPicture,title,date,timeFrom,timeTo,description);

      event.target.eventPicture.value = "";
      event.target.title.value = "";
      event.target.date.value = "";
      event.target.timeFrom.value = "";
      event.target.timeTo.value = "";
      event.target.description.value = "";

      Bert.alert("Event successfully created", "success", "growl-top-right");
      Router.go("/viewEvents");
    }
    else{
      Bert.alert("Please enter all field", "danger", "growl-top-right");
    }

    return false;
  }
});


var notEmpty = function(value){
  if(value && value != ''){
    return true;
  }
  Bert.alert("Please fill in all fields", "danger", "growl-top-right");
  return false;
};
