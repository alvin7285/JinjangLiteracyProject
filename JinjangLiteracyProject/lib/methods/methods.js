if (Meteor.isServer) {
	Meteor.methods({
		addEvent: function(title, date, timeFrom, timeTo, description) {
			if(!Meteor.userId()) {
				return false;
			}
      else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var dateCreated = (month + "/" + day + "/" + year).toString();

				Events.insert({
					title: title,
					date: date,
					timeFrom: timeFrom,
					timeTo: timeTo,
					description: description,
					dateCreated: dateCreated,
          createdAt: new Date(),
          volunteers:0,
					userJoined:[],
				});
			}
		},

		removeEvent: function(eventId){
			Events.remove(eventId);
		},

		countUser: function(thisEvent, username) {
			Events.update(thisEvent, { $addToSet: { userJoined: username}});
			Events.update(thisEvent, { $inc: {volunteers: +1}});

		},


	});
}
