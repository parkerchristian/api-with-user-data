const test = QUnit.test;

QUnit.module('PROFILE-DISPLAY TEST');

function makeProfileDisplay(user) {
    const html = `
        <span id="profile-display">
            <img src="http://hosting.med.upenn.edu/garcialab/wp-content/uploads/sites/12/2015/10/Blank-Profile-Icon.jpg">
            <h2>Display Name</h2>
            <input type="submit" value="Sign Out">
        </span>
    `; 

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('create profile display', assert => {
    // arrange
    const expected = `
        <span id="profile-display">
            <img src="http://hosting.med.upenn.edu/garcialab/wp-content/uploads/sites/12/2015/10/Blank-Profile-Icon.jpg">
            <h2>Display Name</h2>
            <input type="submit" value="Sign Out">
        </span>
    `;
    const user = {
        displayName: 'Display Name',
        photoURL: 'http://hosting.med.upenn.edu/garcialab/wp-content/uploads/sites/12/2015/10/Blank-Profile-Icon.jpg'
    };
    // act
    const result = makeProfileDisplay(user);
    // assert
    assert.htmlEqual(result, expected);
});