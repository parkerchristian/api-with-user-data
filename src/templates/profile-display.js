import { auth } from '../firebase/firebase.js';

export function makeProfileDisplay(user) {
    const photo = user.photoURL || 'https://uvmbored.com/wp-content/uploads/2017/09/blank-profile-picture.jpg';
    const html = `
        <span id="profile-display">
            <img src="${photo}">
            <h2>${user.displayName}</h2>
            <h3><a href="./index.html">Home</a></h3>
            <h3><a href="./favorites.html">My Favorites</a></h3>
            <input type="submit" value="Sign Out">
        </span>
    `; 

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const profileDisplay = document.getElementById('header');

export default function loadProfileDisplay() {
    auth.onAuthStateChanged(user => {
        if(user) {
            const profileDisplayDom = makeProfileDisplay(user);
            const signOutButton = profileDisplayDom.querySelector('input');
            
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            profileDisplay.appendChild(profileDisplayDom);
        } else {
            window.location = './auth.html';
        }
    });
} 