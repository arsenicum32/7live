Meteor.startup(function() {
  Uploader.finished = function(index, file,templateContext) {
    Uploads.insert(file);
    Session.set('eventImages', Session.get('eventImages') + file.url+'|');
    //$('body').append('<img src="'+file.url+'" >');
  //   for(var p in file) {
  //
  //   alert(p);
  // }
  }
});
