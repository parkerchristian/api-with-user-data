const test = QUnit.test;

QUnit.module('OBJECT TO ARRAY TEST');

function objectToArray(object) {
    const keys = Object.keys(object);
    return keys.map(key => object[key]);
}

test('convert object of objects into an array of objects', assert => {
    // arrange
    const testObject = {
        first: { id:'1234', name:'Beyonce' },
        second: { id:'5678', name:'John' },
        third: { id:'1357', name:'Prince' }
    };
    const expected = [
        { id:'1234', name:'Beyonce' },
        { id:'5678', name:'John' },
        { id:'1357', name:'Prince' }
    ];
    // act
    const result = objectToArray(testObject);
    // assert
    assert.deepEqual(result, expected);
});