Template.background.helpers({
  img:function(){
    return Session.get('backgroundImage');
  }
});

Template.event.helpers({
  sound: function(){
    return 'foo.wav';
  },
  soundFormat: function() {
    return 'wav';
  },
  sa: function(){
    return {sp:
      Session.get('s'),
    sp2:Session.get('s')*2,
    sp3:Session.get('s')*3,
    sp4:Session.get('s')*4,
    sp5:Session.get('s')*5,
    sp6:Session.get('s')*6,
    spA:Session.get('s')*7};
  },
  images: function(){
      var im = Session.get('eventImages').split('|');
      return {
        one: im[0],
        two: im[1],
        three: im[2],
        four: im[3],
        five: im[4],
        six: im[5],
        seven: im[6]
      };
  }
});

Template.main.helpers({
  'view': function(){
    return {h:Session.get('CurrentTemplate')=='home',e:Session.get('CurrentTemplate')=='event'};
  }
});

Template.wall.helpers({
  posts: function(){
    return Posts.find().fetch().reverse();//[{title:'one'},{title:'two'}];//Posts.find();
  }
});
