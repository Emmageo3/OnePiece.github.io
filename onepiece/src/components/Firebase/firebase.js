import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBMC_9jAvKmON6pRHOz_QaKyG8R-LI648M",
    authDomain: "one-piece-4bf0d.firebaseapp.com",
    projectId: "one-piece-4bf0d",
    storageBucket: "one-piece-4bf0d.appspot.com",
    messagingSenderId: "119727123860",
    appId: "1:119727123860:web:192cf1aa31145765b5f381"
  };

  class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }

    // inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    // Déconnexion
    signoutUser = () => this.auth.signOut();

    // Récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email); 

    // firestore
    user = uid => this.db.doc(`users/${uid}`);
}

export default Firebase;