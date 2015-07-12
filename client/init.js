Meteor.startup(function() {
  Uploader.finished = function(index, file,templateContext) {
    Uploads.insert(file);
    //$('body').append('<img src="'+file.url+'" >');
  //   for(var p in file) {
  //
  //   alert(p);
  // }
  }
});
