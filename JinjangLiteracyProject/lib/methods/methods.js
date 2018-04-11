if (Meteor.isServer) {
	Meteor.methods({
		addEvent: function(title, date, time, description) {
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
					time: time,
					description: description,
					dateCreated: dateCreated,
          createdAt: new Date(),
          volunteers:0,
				});
			}
		},

		removeEvent: function(eventId){
			Events.remove(eventId);
		}
	});
}
