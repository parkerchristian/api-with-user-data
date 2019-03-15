import loadProfileDisplay from './templates/profile-display.js';
import { fetchSpotifyApi } from './fetch/fetch-function.js';
import { readFromQuery } from './hash-query/query-components.js';
import { makeURL } from './hash-query/make-url.js';
import './hash-query/search-components.js';
import './paging/paging-components.js';

loadProfileDisplay();

let baseGetUrl = null;

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    baseGetUrl = makeURL(searchOptions);
    // fetchSpotifyApi(baseGetUrl);
});