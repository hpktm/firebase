var admin = require('firebase-admin');

var serviceAccount = require("D:\/node\/serviceAccountKey.json");

var app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://experiment-1536292725060.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("D:\/node\/fireblog/posts");

// var usersRef = ref.child("users");

// reading db

/*
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
*/

var postsRef = ref.child("posts");

// reading db on new insertion

postsRef.push({
  author: "gracehop",
  title: "Announcing COBOL, a New Programming Language"
});


ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("Author: " + newPost.author);
  console.log("Title: " + newPost.title);
  console.log("Previous Post ID: " + prevChildKey);
});
