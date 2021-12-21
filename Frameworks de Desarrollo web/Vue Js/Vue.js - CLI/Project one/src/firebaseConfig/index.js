import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyD1FRrYUpL31LLLGy2yQktqQ1AZgZOIEZs",
  authDomain: "simpleway-f16d1.firebaseapp.com",
  databaseURL: "https://simpleway-f16d1.firebaseio.com",
  projectId: "simpleway-f16d1",
  storageBucket: "simpleway-f16d1.appspot.com",
  messagingSenderId: "709865181052",
  appId: "1:709865181052:web:b8f6133e7e92615e5fdef9",
  measurementId: "G-133LLCHWBD"
};
firebase.initializeApp(firebaseConfig)

//utils
const auth = firebase.auth()
const db = firebase.database()

//references


//export utils/refs
export {
  auth,
  db
}










//firestore

// utils
// const db = firebase.firestore()
// const auth = firebase.auth()

//collection references
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

//export utils/refs
// export {
//   db,
//   auth,
//   usersCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
// }