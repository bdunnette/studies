Template.home.studies = function () {
  return Studies.find();
};

Template.dashboard.greeting = function () {
  return "Welcome to studies.";
};



Template.dashboard.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('home');
  this.route('dashboard', {
    data: function() { return Studies.find(); }
  });
  this.route('study', {
    path: '/study/:_id',
    data: function() { return Studies.findOne(this.params._id); }
  });
});
