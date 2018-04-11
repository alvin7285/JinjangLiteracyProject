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
