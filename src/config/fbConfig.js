import firebase from 'firebase/app'
import 'firebase/firestore'

const config = require('./config');

const firebaseConfig = {
    apiKey: config.firebaseConfig.apiKey,
    authDomain: config.firebaseConfig.authDomain,
    projectId: config.firebaseConfig.projectId,
    storageBucket: config.firebaseConfig.storageBucket,
    messagingSenderId: config.firebaseConfig.messagingSenderId,
    appId: config.firebaseConfig.appId
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase 