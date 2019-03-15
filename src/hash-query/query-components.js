export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const queryObject = {
        q: searchParams.get('q'),
        limit: parseInt(searchParams.get('limit')),
        offset: parseInt(searchParams.get('offset'))
    };
    return queryObject;
}

export function writeToQuery(existingQuery, options) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', options.searchTerm);
    searchParams.set('limit', options.limit);
    searchParams.set('offset', options.offset);
    return searchParams.toString();
}