import { currentPageToOffset } from '../../src/paging/paging-functions.js';

const test = QUnit.test;

QUnit.module('PAGING COMPONENT TESTS');


test('Page 3 of 5 with limit 20', assert => {
    //Arrange
    const options = {
        limit: 20,
        currentPage: 3,
        totalPages: 5
    };
    const expected = {
        offset: 40,
        limit: 20
    };
    //Act
    const result = currentPageToOffset(options);
    //Assert
    assert.deepEqual(result, expected);
});

test('Page 5 of 5 with limit 13', assert => {
    //Arrange
    const options = {
        limit: 13,
        currentPage: 5,
        totalPages: 5
    };
    const expected = {
        offset: 52,
        limit: 13
    };
    //Act
    const result = currentPageToOffset(options);
    //Assert
    assert.deepEqual(result, expected);
});