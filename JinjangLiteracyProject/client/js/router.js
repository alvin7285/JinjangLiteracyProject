Router.configure({
  layoutTemplate: 'main_layout'
});

Router.map(function(){
  this.route('home', {
    path: '/home',
    template:'home'
  });

  this.route('login', {
    path: '/login',
    template:'login'
  });
});
