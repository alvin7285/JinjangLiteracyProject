Template.events.rendered = function(){
  $("#events").addClass('active');
  $("#home").removeClass('active');
  $("#aboutUs").removeClass('active');
  $("#donate").removeClass('active');
  $("#volunteer").removeClass('active');
  $("#login").removeClass('active');
  $("#setting").removeClass('active');
}

Template.events.helpers({
  events: function() {
  	var events = Events.find({}, {sort: {createdAt: -1}});
		return events;
	}
});

Template.events.events({
    "click #joinEvent": function() {
    		var thisUser = Meteor.userId();
    		var thisEvent = Events.findOne({_id: this._id})._id;
    		var username = Meteor.user().username;
    		var thisEventJoin = Events.findOne({_id: this._id}, {userJoined: {$in: username}}).userJoined;

    		if (thisEventJoin.indexOf(username) > -1) {
    			Bert.alert("You cannot join twice", "danger", "growl-top-right");
    			// In the array!, meaning user has voted
    		}
        else {
    			// Not in the Array, Do stuff.
    			Meteor.call("countUser", thisEvent, username);
    			Bert.alert("You have joined current event", "success", "growl-top-right");

    		}
    	},

      "click #registerToJoin":function() {
          Bert.alert("Please login to join event", "danger", "growl-top-right");
      }
});
