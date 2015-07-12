Template.event.events({
  'mousemove #menuOverEvents': function(e){
    //$('#menuOverEvents').on('mousemove', function(){
      Session.set('s', parseInt(e.pageX - $(e.target).offset().left)*0.125+0.125);
    //});
  },
  'click #closeButton': function(){
      Session.set('CurrentTemplate','home');
  }
});

Template.userView.events({
  'mouseenter #userView': function(){
    $(".contentUser").show();
  },
  'mouseleave #userView': function(){
    $(".contentUser").hide();
  },
});

Template.wall.events({
  'click div': function(){
    Session.set('CurrentTemplate','event');
  }
});

Template.main.events({
  'click #addButton':function(){
    Session.set('CurrentTemplate','add');
  },
  'click #backButton':function(){
    Session.set('CurrentTemplate','home');
  }
});
