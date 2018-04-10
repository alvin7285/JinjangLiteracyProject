Router.configure({
  layoutTemplate: 'main_layout'
});

Router.map(function(){
  this.route('home', {
    path: '/home',
    template:'home'
  });

  this.route('aboutUs', {
    path: '/aboutUs',
    template:'aboutUs'
  });

  this.route('events', {
    path: '/events',
    template:'events'
  });

  this.route('donate', {
    path: '/donate',
    template:'donate'
  });

  this.route('volunteer', {
    path: '/volunteer',
    template:'volunteer'
  });

  this.route('jinjangStory', {
    path: '/jinjangStory',
    template:'jinjangStory'
  });

  this.route('login', {
    path: '/login',
    template:'login'
  });

  this.route('setting', {
    path: '/setting',
    template:'setting'
  });
});
