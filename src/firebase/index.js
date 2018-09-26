import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyBhbtIv0u5DxZm4mqYx59rTYe4eerdldn8",
   authDomain: "demoproject-c89ba.firebaseapp.com",
   databaseURL: "https://demoproject-c89ba.firebaseio.com",
   projectId: "demoproject-c89ba",
   storageBucket: "demoproject-c89ba.appspot.com",
   messagingSenderId: "1055246290453"
 };
 firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}
