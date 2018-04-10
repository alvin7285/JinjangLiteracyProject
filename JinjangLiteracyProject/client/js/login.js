Template.login.rendered = function(){

}

Template.login.events({
  "submit .loginForm": function(event){
    var username = trimInput(event.target.username.value);
    var password = trimInput(event.target.password.value);

    if(notEmpty(username) && notEmpty(password) && isValidPassword(password)){
      Meteor.loginWithPassword(username,password, function(error){
        if(error) {
          Bert.alert(error.reason,"danger", "growl-top-right");
          return false;
        }
        else{
          Router.go("/events");
          Bert.alert("You are now logged  in", "success", "growl-top-right");
        }
      });
    }
      return false;
  }
});

//Trim Helper
var trimInput = function(val){
  return val.replace(/^\s*|\s*$/g, "");
};

var notEmpty = function(value){
  if(value && value != ''){
    return true;
  }
  Bert.alert("Please fill in all fields", "danger", "growl-top-right");
  return false;
};

isValidPassword = function(password){
  if(password.length < 6){
    Bert.alert("Password must be a least 6 characters", "danger", "growl-top-right");
    return false;
  }
  return true;
};
