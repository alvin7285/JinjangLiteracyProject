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
  },

  "click #editEvent": function(e){
    e.preventDefault();
    $('#eventsModal').modal('show');
    var eventId = this._id;
    var selectedEvent = Events.findOne(eventId);

    var title = selectedEvent.title;
    var date = moment(selectedEvent.date,'DD-MM-YYYY').format('YYYY-MM-DD');
    var timeFrom = moment(selectedEvent.timeFrom,'h:mm A').format('HH:mm');
    var timeTo = moment(selectedEvent.timeTo,'h:mm A').format('HH:mm');
    var description = selectedEvent.description;

    document.getElementById("newTitle").value = title;
    document.getElementById("newDate").value = date;
    document.getElementById("newTimeFrom").value = timeFrom;
    document.getElementById("newTimeTo").value = timeTo;
    document.getElementById("newDescription").value = description;

  }
});
