import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCMEVu6jMW5jETh0nAt5C_nQHm_9zEjszs',
  authDomain: 'nayeonsi-stonewhales.firebaseapp.com',
  databaseURL: 'https://nayeonsi-stonewhales.firebaseio.com',
  projectId: 'nayeonsi-stonewhales',
  storageBucket: 'nayeonsi-stonewhales.appspot.com',
  messagingSenderId: '374377361063',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
