import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBNr4miH94-2RUK0m5bCOxE5ari4GH6qZA",
    authDomain: "crwn-dbs-2a1ec.firebaseapp.com",
    databaseURL: "https://crwn-dbs-2a1ec.firebaseio.com",
    projectId: "crwn-dbs-2a1ec",
    storageBucket: "crwn-dbs-2a1ec.appspot.com",
    messagingSenderId: "869620634630",
    appId: "1:869620634630:web:9ab3b8ea355198a5b09f87",
    measurementId: "G-KYE9WS1FKS"
  };

  export const createUserProfileDocument=async (userAuth,additionaData) =>{
    //console.log(userAuth);
    if(!userAuth) return;
    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const snapshot=userRef.get();
    if(!snapshot.exists){
      const { displayName,email }=userAuth;
      const createAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionaData

        })
      }catch(error){
          console.log('error creating user',error.message);
      }

    }
    return userRef;


  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=() => auth.signInWithPopup(provider);
  export default firebase;
  
  