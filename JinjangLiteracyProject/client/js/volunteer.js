Template.volunteer.rendered = function(){

}

Template.volunteer.events({
  "submit .volunteerForm": function (event){
    var username = trimInput(event.target.username.value);
    var name = trimInput(event.target.name.value);
    var email = trimInput(event.target.email.value);
    var password = trimInput(event.target.password.value);
    var passwordConfirm = trimInput(event.target.passwordConfirm.value);

    if (notEmpty(username) && notEmpty(name) && notEmpty(email) &&
        notEmpty(password) && notEmpty(passwordConfirm)){
          //do something
        }
    else{
          return false;
        }
  }
});

//Trim Helper
var trimInput = function(val){
  return val.replace(/^\s*|\s*$/g, "");
}

var notEmpty = function(val){
  if(value && value != ''){
    return true;
  }
  else {
    Bert.alert("Please fill in all fields", "danger", "growl-top-right");
    return false;
  }
}
