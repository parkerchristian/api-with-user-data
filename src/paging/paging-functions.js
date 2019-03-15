export function currentPageToOffset(options) {

    const offset = ((options.currentPage - 1) * options.limit);

    const offsetObject = {
        offset: offset,
        limit: options.limit
    };
    return offsetObject;
}