Template.viewEvents.rendered = function(){
  $("#events").addClass('active');
  $("#home").removeClass('active');
  $("#aboutUs").removeClass('active');
  $("#donate").removeClass('active');
  $("#volunteer").removeClass('active');
  $("#login").removeClass('active');
  $("#setting").removeClass('active');
}

Template.viewEvents.helpers({
  events: function() {
  	var events = Events.find({}, {sort: {createdAt: -1}});
		return events;
	}
});

Template.viewEvents.events({
  "click #deleteEvent": function(){
    if (confirm("Confirm to delete this event?") == true){
      Meteor.call("removeEvent", this._id);
      Bert.alert("The Event has been deleted", "success", "growl-top-right");
    }
  }

});
