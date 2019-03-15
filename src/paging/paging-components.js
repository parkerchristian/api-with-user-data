
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let pagingObject = {
    currentPage: 1,
    totalPages: 10
};
nextButton.addEventListener('click', () => {
    pagingObject.currentPage++;
    checkForDisable(pagingObject);
    currentPage.textContent = pagingObject.currentPage;
});

previousButton.addEventListener('click', () => {
    pagingObject.currentPage--;
    checkForDisable(pagingObject);
    currentPage.textContent = pagingObject.currentPage;
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
