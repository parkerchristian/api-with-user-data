import { auth, userRef } from './firebase.js';


const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#auth-ui-section', {
    //Everything below is a key/value pair
    //signInOptions
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    //signInSuccsessful
    signInSuccessUrl: './',
    //credentialHelper
    callbacks: {
        signInSucessWithAuthResult: function(authResult) {
            const user = authResult.user;
            console.log('OUR LOG', authResult);
            userRef.child(user.uid)
                .set({
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            return true;
        }

    }
    //callbacks : set user to database

});
 