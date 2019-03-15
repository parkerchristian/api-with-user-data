import loadProfileDisplay from './templates/profile-display.js';
import { auth, favoritesByUserRef } from './firebase/firebase.js';
import objectToArray from './fetch/object-to-array.js';
import loadAlbums from './templates/album-cards.js';

loadProfileDisplay();

auth.onAuthStateChanged(user => {

    const userID = user.uid;
    const favoritesFolderRef = favoritesByUserRef.child(userID);
    favoritesFolderRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const favoriteList = objectToArray(data);
            loadAlbums(favoriteList);
        });
});