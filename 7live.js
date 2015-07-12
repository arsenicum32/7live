if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('s', 2);
  Session.setDefault('eventImages', 'http://docode.com.ua/wp-content/uploads/pictures/pic-1.jpg|http://docode.com.ua/wp-content/uploads/pictures/pic-2.jpg|http://docode.com.ua/wp-content/uploads/pictures/pic-3.jpg|http://docode.com.ua/wp-content/uploads/pictures/pic-4.jpg|http://placehold.it/300x300|http://placehold.it/400x400|http://placehold.it/500x500|http://placehold.it/600x600');
  Session.setDefault('CurrentTemplate','home');

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
