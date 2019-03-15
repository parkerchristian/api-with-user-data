import { writeToQuery } from './query-components.js';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchNode = searchForm.querySelector('input');
    const options = {
        searchTerm: searchNode.value,
        limit: 20,
        offset: 0
    };
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeToQuery(existingQuery, options);

    window.location.hash = newQuery;
});