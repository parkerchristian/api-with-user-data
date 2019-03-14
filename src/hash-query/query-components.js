export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const queryObject = {
        q: searchParams.get('q')
    };
    return queryObject;
}

export function writeToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', searchTerm);
    return searchParams.toString();
}