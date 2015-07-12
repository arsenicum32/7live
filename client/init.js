Meteor.startup(function() {
  Uploader.finished = function(index, file,templateContext) {
    Uploads.insert(file);
    if(file.url.split('.')[1]=='wav'){
      Session.set('backgroundSound',file.url);
      $('#soundName').text(file.name);
    }else{
    Session.set('eventImages', Session.get('eventImages') + file.url+'|');
    }
    //$('body').append('<img src="'+file.url+'" >');
  //   for(var p in file) {
  //
  //   alert(p);
  // }
  }
});
