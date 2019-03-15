import { readFromQuery, writeToQuery } from '../../src/hash-query/query-components.js';
import { currentPageToOffset } from '../../src/paging/paging-functions.js';

const test = QUnit.test;

QUnit.module('QUERY TESTS');

test('write search to query test', assert => {
    // arrange
    const existingQuery = '';
    const options = {
        searchTerm: 'cher',
        limit: 20,
        offset: 0
    };
    const expected = 'q=cher&limit=20&offset=0';
    // act
    const result = writeToQuery(existingQuery, options);
    // assert
    assert.equal(result, expected);
});

test('write a search to an existing query', assert => {
    // arrange
    const existingQuery = 'q=cher';
    const options = {
        searchTerm: 'Motley Crue',
        limit: 20,
        offset: 0
    };
    const expected = 'q=Motley+Crue&limit=20&offset=0';
    // act
    const result = writeToQuery(existingQuery, options);
    // assert
    assert.equal(result, expected);
});

test('read query to object', assert => {
    //Arrange
    const existingQuery = 'q=Motley+Crue&limit=20&offset=40';
    const expected = {
        q: 'Motley Crue',
        limit: 20,
        offset: 40
    };
    //Act
    const result = readFromQuery(existingQuery);
    //Assert
    assert.deepEqual(result, expected);
});

test('on page change update query', assert => {
    // arrange
    const options = {
        currentPage: 3,
        totalPages: 10,
        limit: 20
    };
    const expected = 'q=Motley+Crue&limit=20&offset=40';
    const existingQuery = 'q=Motley+Crue&limit=20&offset=20';
    // act
    const offsetOptions = currentPageToOffset(options);
    const result = writeToQuery(existingQuery, offsetOptions);
    // assert
    assert.equal(result, expected);
});