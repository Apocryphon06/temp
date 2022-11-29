import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC7AaJ47HkYCV7jN9hsRvleI_JGsNZGjmI",
  authDomain: "nft-chat-df8ca.firebaseapp.com",
  projectId: "nft-chat-df8ca",
  storageBucket: "nft-chat-df8ca.appspot.com",
  messagingSenderId: "965458648543",
  appId: "1:965458648543:web:6ac0c0a0a5816e7f26386a",
});

export const db = firebaseApp.firestore();

export const auth = firebase.auth();



