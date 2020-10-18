import * as firebase from 'firebase';
import 'firebase/database';


// when published find a way to hide this
const firebaseConfig = {
    apiKey: "AIzaSyCo2w4gUU9AIfMeRFf81olymNIsvDDZm78",
    authDomain: "bexfedata.firebaseapp.com",
    databaseURL: "https://bexfedata.firebaseio.com",
    projectId: "bexfedata",
    storageBucket: "bexfedata.appspot.com",
    messagingSenderId: "458537410462",
    appId: "1:458537410462:web:ef8d577e8ccb456bf3408f"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.database();
