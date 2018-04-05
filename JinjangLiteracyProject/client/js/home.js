Meteor.startup(function () {
  Session.setDefault("templateName", "home")
});

Template.body.helpers({
  template_name: function(){
    return Session.get("templateName")
  }
});

Template.body.events({
  "click #home": function() {
    Session.set("templateName", "home");
  },
  "click #aboutUs": function() {
     Session.set("templateName", "aboutUs");
  },
  "click #events": function() {
    Session.set("templateName", "events");
  },
  "click #donation": function() {
     Session.set("templateName", "donation");
  },
  "click #volunteer": function() {
    Session.set("templateName", "volunteer");
  },
  "click #login": function() {
     Session.set("templateName", "login");
  }
});
