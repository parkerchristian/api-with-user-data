export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const queryObject = {
        q: searchParams.get('q') ? searchParams.get('q') : false,
        limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')) : 20,
        offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')) : 0
    };
    return queryObject;
}

export function writeToQuery(existingQuery, options) {
    const searchParams = new URLSearchParams(existingQuery);
    options.searchTerm ? searchParams.set('q', options.searchTerm) : false;
    searchParams.set('limit', options.limit);
    searchParams.set('offset', options.offset);
    return searchParams.toString();
}