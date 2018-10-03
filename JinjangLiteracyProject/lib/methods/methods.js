if (Meteor.isServer) {
	Meteor.users.allow({
    update: function (userId, doc, fieldNames, modifier) {
           return true;
        }
});
	Meteor.methods({
		addEvent: function(eventPicture, title, date, timeFrom, timeTo, description) {
			if(!Meteor.userId()) {
				return false;
			}
      else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var dateCreated = (day + "/" + month + "/" + year).toString();
				var date = moment(date).format('DD-MM-YYYY');
				var timeFrom = moment(timeFrom,'HH:mm').format('h:mm A');
				var timeTo = moment(timeTo,'HH:mm').format('h:mm A');

				Events.insert({
					eventPicture: eventPicture,
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

		removeChildren: function(eventId){
			return Children.remove({});
		},

		countUser: function(thisEvent, username) {
			Events.update(thisEvent, { $addToSet: { userJoined: username}});
			Events.update(thisEvent, { $inc: {volunteers: +1}});
		},

		upload: function(fileContent) {
	    console.log("start insert");
	    import_file_orders(fileContent);
	    console.log("completed");
  	},

	});
}

import_file_orders = function(file) {
	var lines = file.split(/\r\n|\n/);
	var l = lines.length - 1;
	for (var i=0; i < l; i++) {
	  var line = lines[i];
	  var line_parts = line.split(',');
	  var test1 = line_parts[0];
	  var test2 = line_parts[1];
	  var test3 = line_parts[2];
	  var test4 = line_parts[3];
	  var test5 = line_parts[4];
	  var test6 = line_parts[5];
	  Children.insert({
			name:test1,
			id:test2,
			ic:test3,
			age:test4,
			address:test5,
			phoneNum:test6,
		});
	}
}
