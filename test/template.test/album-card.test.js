import { makeAlbumCard } from '../../src/templates/album-cards.js';

const test = QUnit.test;

QUnit.module('ALBUM CARD TEST');

test('create album card template', assert => {
    //Arrange
    const expected = `
        <li>
            <span id="favorites-note">🎵</span>
            <h2>Album name</h2>
            <img src="https://cdn-images-1.medium.com/max/1600/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg">
            <h2>Artist</h2>
        </li>
    `;
    const album = {
        name: 'Album name',
        images: [{ url: 'https://cdn-images-1.medium.com/max/1600/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg' }],
        artists: [{ name: 'Artist' }]
    };
    //Act
    const result = makeAlbumCard(album);
    //Assert
    assert.htmlEqual(result, expected);
});