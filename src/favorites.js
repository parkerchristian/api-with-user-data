import loadProfileDisplay from './templates/profile-display.js';
import { auth, favoritesByUserRef } from './firebase/firebase.js';

loadProfileDisplay();



auth.onAuthStateChanged(user => {

    const userID = auth.currentUser.uid;
    const favoritesFolderRef = favoritesByUserRef.child(userID);
    favoritesFolderRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            console.log(data);
        });
});