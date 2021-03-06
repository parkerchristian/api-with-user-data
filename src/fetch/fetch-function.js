import { encodedData } from '../firebase/spotify-token-header.js';
import loadAlbums from '../templates/album-cards.js';
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

export function fetchSpotifyApi(baseGetUrl) {

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
}