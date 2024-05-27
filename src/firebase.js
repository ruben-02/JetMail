import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDACCqp7s9PprxQvu8scXes3OGlBlXH3wc",
  authDomain: "ruben-jetmail.firebaseapp.com",
  databaseURL: "https://ruben-jetmail-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ruben-jetmail",
  storageBucket: "ruben-jetmail.appspot.com",
  messagingSenderId: "763169299392",
  appId: "1:763169299392:web:c4b96d541e4ad29b3c4625"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db,auth,provider,storage }