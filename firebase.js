var admin = require('firebase-admin');

var serviceAccount = require(" path to serviceAccountKey.json");

var app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: " path to firebase realtime database "
});

var db = admin.database();
var ref = db.ref("D:\/node\/fireblog");

var usersRef = ref.child("users");


//  INSERT / UPDATE
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});

// INSERT / APPEND

// usersRef.child("alanisawesome").set({
//   date_of_birth: "June 23, 1912",
//   full_name: "Alan Turing"
// });
// usersRef.child("gracehop").set({
//   date_of_birth: "December 9, 1906",
//   full_name: "Grace Hopper"
// });


//  UPDATE SINGLE

/*
var hopperRef = usersRef.child("gracehop");
hopperRef.update({
  "nickname": "Amazing Grace"
});


*/

//  UPDATE MULTIPLE
/*
usersRef.update({
  "alanisawesome/nickname": "Alan The Machine",
  "gracehop/nickname": "Amazing Grace"
});
*/

var postsRef = ref.child("posts");
var postId = postsRef.key;
// postsRef.push().set({
//   author: "alanisawesome",
//   title: "The Turing Machine"
// });

postsRef.push({
  author: "gracehop",
  title: "Announcing COBOL, a New Programming Language"
});



console.log( 'ok', postId)
