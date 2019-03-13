import { auth } from '../firebase/firebase.js';

export function makeProfileDisplay(user) {
    const html = `
        <span id="profile-display">
            <img src="${user.photoURL}">
            <h2>${user.displayName}</h2>
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