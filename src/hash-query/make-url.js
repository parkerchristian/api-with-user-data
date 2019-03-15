export function makeURL(searchOptions) {
    const BASE_URL = 'https://api.spotify.com/v1/search';
    const url = new URL(BASE_URL);
    url.searchParams.set('q', searchOptions.q);
    url.searchParams.set('limit', searchOptions.limit);
    url.searchParams.set('offset', searchOptions.offset);
    url.searchParams.set('type', 'album');
    url.searchParams.set('market', 'US');
    return url.toString();
}