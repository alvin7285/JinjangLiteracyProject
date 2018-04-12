Template.volunteer.rendered = function(){
  $("#volunteer").addClass('active');
  $("#home").removeClass('active');
  $("#aboutUs").removeClass('active');
  $("#events").removeClass('active');
  $("#donate").removeClass('active');
  $("#login").removeClass('active');
}

Template.volunteer.events({
  "submit .volunteerForm": function (event){
    var username = trimInput(event.target.username.value);
    var name = trimInput(event.target.name.value);
    var email = trimInput(event.target.email.value);
    var password = trimInput(event.target.password.value);
    var passwordConfirm = trimInput(event.target.passwordConfirm.value);

    if (notEmpty(username) && notEmpty(name) && notEmpty(email) &&
        isEmail(email) && areValidPassword(password,passwordConfirm)){
          Accounts.createUser({
            username:username,
            name:name,
            email:email,
            password:password
          }, function(error){
            if(error){
              Bert.alert(error.reason, "danger", "growl-top-right");
            }
            else{
              Bert.alert("Account Created! Welcome!","success", "growl-top-right");
              Router.go("/login");
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

isEmail = function(value) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(filter.test(value)){
    return true;
  }
  Bert.alert("Please enter a valid email address", "danger", "growl-top-right");
};

isValidPassword = function(password){
  if(password.length < 6){
    Bert.alert("Password must be a least 6 characters", "danger", "growl-top-right");
    return false;
  }
  return true;
};

areValidPassword = function(password,confirm){
  if(!isValidPassword(password)){
    return false;
  }
  if(password !== confirm){
    Bert.alert("Passwords do not match", "danger", "growl-top-right");
    return false;
  }
  return true;
};
