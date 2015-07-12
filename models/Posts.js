Posts = new Mongo.Collection('posts');

//db.Posts.insert({title: "A new post"});

Posts.insert({
    title: "event name",
    autor: '',
    date: new Date(),
    photos: [],
    likes: [],
    sound: '',
    comments: {}
});
