import { currentPageToOffset } from './paging-functions.js';
import { writeToQuery } from '../hash-query/query-components.js';

const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');

let pagingObject = {
    currentPage: 1,
    totalPages: 10,
    limit: 20
};

checkForDisable(pagingObject);

nextButton.addEventListener('click', () => {
    pagingObject.currentPage++;
    checkForDisable(pagingObject);
    currentPage.textContent = pagingObject.currentPage;
    const offsetOptions = currentPageToOffset(pagingObject);
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeToQuery(existingQuery, offsetOptions);
    window.location.hash = newQuery;
});

previousButton.addEventListener('click', () => {
    pagingObject.currentPage--;
    checkForDisable(pagingObject);
    currentPage.textContent = pagingObject.currentPage;
    const offsetOptions = currentPageToOffset(pagingObject);
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeToQuery(existingQuery, offsetOptions);
    window.location.hash = newQuery;
});

function checkForDisable(pagingObject) {
    if(pagingObject.currentPage === pagingObject.totalPages) {
        nextButton.disabled = true;
    } else if(pagingObject.currentPage === 1) {
        previousButton.disabled = true;
    } else {
        previousButton.disabled = false;
        nextButton.disabled = false;
    }
}