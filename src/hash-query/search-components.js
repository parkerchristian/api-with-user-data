import { writeToQuery } from './query-components.js';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchNode = searchForm.querySelector('input');
    const searchTerm = searchNode.value;

    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeToQuery(existingQuery, searchTerm);

    window.location.hash = newQuery;
});