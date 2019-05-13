import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBAELHXt0um1MdvX3Ou6gjAhzZK2ey8sBo',
  authDomain: 'startupfest-ratings.firebaseapp.com',
  databaseURL: 'https://startupfest-ratings.firebaseio.com',
  projectId: 'startupfest-ratings',
  storageBucket: 'startupfest-ratings.appspot.com',
  messagingSenderId: '740786162928',
  appId: '1:740786162928:web:1cf1c69c1ca6d30c',
};

firebase.initializeApp(config);

export default firebase;
