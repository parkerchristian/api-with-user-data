import loadProfileDisplay from './templates/profile-display.js';
import { encodedData } from './firebase/spotify-token-header.js';

loadProfileDisplay();

const albumList = document.getElementById('album-list');

const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const basePostUrl = 'https://accounts.spotify.com/api/token';

const postUrl = corsAnywhereUrl + basePostUrl;

const postOptions = {
    method: 'post',
    headers: {
        authorization: `Basic ${encodedData}`,
        'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
};

const baseGetUrl = 'https://api.spotify.com/v1/search?q=cher&type=album&market=US';
const getUrl = corsAnywhereUrl + baseGetUrl;

fetch(postUrl, postOptions)
    .then(response => response.json())
    .then(token => {
        const getOptions = {
            headers: {
                Authorization: `${token.token_type} ${token.access_token}`
            }
        };
        return getOptions;
    })
    .then(getOptions => {
        fetch(getUrl, getOptions)
            .then(response => response.json())
            .then(body => {
                console.log('HEY IT DID A THING!', body);
            });
    });
