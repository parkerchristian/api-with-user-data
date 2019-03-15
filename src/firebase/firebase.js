var config = {
    apiKey: 'AIzaSyCBjK4nmExH1Ai8yLMuP1ihtFE0Ynl9F8Y',
    authDomain: 'spotify-pair-build.firebaseapp.com',
    databaseURL: 'https://spotify-pair-build.firebaseio.com',
    projectId: 'spotify-pair-build'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
export const userRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');