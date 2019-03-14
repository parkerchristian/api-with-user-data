import loadProfileDisplay from './templates/profile-display.js';
import { encodedData } from './firebase/spotify-token-header.js';
import loadAlbums from './templates/album-cards.js';
import { readFromQuery } from './hash-query/query-components.js';
import { makeURL } from './hash-query/make-url.js';
import './hash-query/search-components.js';

loadProfileDisplay();

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

let baseGetUrl = null;

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    baseGetUrl = makeURL(searchOptions);
    console.log('!!!', baseGetUrl);
    // const baseGetUrl = 'https://api.spotify.com/v1/search?q=cher&type=album&market=US';
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
                    loadAlbums(body.albums.items);
                });
        });
});

