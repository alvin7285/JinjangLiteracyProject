Template.navBar.events({
    "click .logOut": function(event){
      Meteor.logout(function(error){
        if(error){
          Bert.alert(error.reason, "danger", "growl-top-right");
        }
        else{
          Router.go("/home");
          Bert.alert("You have successfully logged out", "success", "growl-top-right");
        }
      });
    },
});
