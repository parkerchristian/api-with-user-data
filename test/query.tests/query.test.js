import { readFromQuery, writeToQuery } from '../../src/hash-query/query-components.js';

const test = QUnit.test;

QUnit.module('QUERY TESTS');

test('write search to query test', assert => {
    // arrange
    const existingQuery = '';
    const searchTerm = 'cher';
    const expected = 'q=cher';
    // act
    const result = writeToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, expected);
});

test('write a search to an existing query', assert => {
    // arrange
    const existingQuery = 'q=cher';
    const searchTerm = 'Motley Crue';
    const expected = 'q=Motley+Crue';
    // act
    const result = writeToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, expected);
});

test('read query to object', assert => {
    //Arrange
    const existingQuery = 'q=Motley+Crue';
    const expected = {
        q: 'Motley Crue',
    };
    //Act
    const result = readFromQuery(existingQuery);
    //Assert
    assert.deepEqual(result, expected);
});