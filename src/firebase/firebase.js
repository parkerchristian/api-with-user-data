var config = {
    apiKey: 'AIzaSyCBjK4nmExH1Ai8yLMuP1ihtFE0Ynl9F8Y',
    authDomain: 'spotify-pair-build.firebaseapp.com',
    databaseURL: 'https://spotify-pair-build.firebaseio.com',
    projectId: 'spotify-pair-build'
};

firebase.initializeApp(config);

export const auth = firebase.auth();