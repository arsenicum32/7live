Template.event.events({
  'mousemove #menuOverEvents': function(e){
    //$('#menuOverEvents').on('mousemove', function(){
    return e;
      //Session.set('s', parseInt(e.pageX - $(e.target).offset().left)*0.125+0.125);
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
  'click div': function(e){
    Session.set('CurrentTemplate','event');
    //Session.set('eventImages', Posts.find({_id:$(e.target).attr('ID')}).photos.join('|'));
    Session.set('eventImages', Posts.find({_id:$(e.target).attr('ID')},{fields: {photos:1}}).fetch()[0].photos.join('|') );
  },
  'mouseover div': function(e){
    var r = Math.floor((Math.random() * 6));
    Session.set('backgroundImage',Posts.find({_id:$(e.target).attr('ID')},{fields: {photos:1}}).fetch()[0].photos[r]);
    console.log( Posts.find({_id:$(e.target).attr('ID')},{fields: {photos:1}}).fetch()[0].photos[1] );
  }
});

Template.main.events({
  'click #addButton':function(){
    Session.set('CurrentTemplate','add');
    Session.set('eventImages','');
  },
  'click #backButton':function(){
    Session.set('CurrentTemplate','home');
  },
  'click #createButton':function(){
    if(Session.get('eventImages')!=''){
    var d = new Date();
    Posts.insert({
        title: $('#title').val(),
        autor: 'anonymouys',
        date: d.getHours()+':'+d.getMinutes()+':'+d.getSeconds(),
        photos: Session.get('eventImages').split('|'),
        photo: Session.get('eventImages').split('|')[0],
        likes: [0,1,2,3,4],
        sound: '',
        comments: {}
    });
    alert(Session.get('eventImages').split('|')[0]);
    Session.set('eventImages','');
    Session.set('CurrentTemplate','home');
  }else {
    alert('добавьте картинок!');
  }
  }
});
