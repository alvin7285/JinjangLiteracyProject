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
    var title = event.target.title.value;
    var date = toString(event.target.date.value);
    var time = toString(event.target.time.value);
    var description = event.target.description.value;

    if(notEmpty(title) && notEmpty(description)){
      Meteor.call('addEvent',title,date,time,description);

      event.target.title.value = "";
      event.target.date.value = "";
      event.target.time.value = "";
      event.target.description.value = "";

      Bert.alert("Event successfully created", "success", "growl-top-right");
    }
    else{
      Bert.alert("something went wrong", "danger", "growl-top-right");
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
