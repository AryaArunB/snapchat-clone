import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4KpO2Vbq6qHSmJMx1cOb5kHYHEa4Gae8",
    authDomain: "snapchat-clone-e3601.firebaseapp.com",
    projectId: "snapchat-clone-e3601",
    storageBucket: "snapchat-clone-e3601.appspot.com",
    messagingSenderId: "103350315653",
    appId: "1:103350315653:web:148511cbdc566f7bf617ec",
    measurementId: "G-BZ1ESQRNTH"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();


  export{db,auth,storage,provider};