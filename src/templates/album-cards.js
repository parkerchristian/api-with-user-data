import { auth, favoritesByUserRef } from '../firebase/firebase.js';

export function makeAlbumCard(album) {
    const artistList = album.artists.map(artist => artist.name).join(', ');
    const html = `
        <li>
            <span id="favorites-note">🎵</span>
            <h2>${album.name}</h2>
            <img src="${album.images[0].url}">
            <h2>${artistList}</h2>
        </li>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const albumList = document.getElementById('album-list');

export default function loadAlbums(albums) {
    clearDisplay();
    albums.forEach(album => {
        const albumCard = makeAlbumCard(album);
        const favoriteNode = albumCard.querySelector('span');
        
        let isFavorite = false;
        const userID = auth.currentUser.uid;
        const favoritesFolderRef = favoritesByUserRef.child(userID);
        const favoritedAlbumRef = favoritesFolderRef.child(album.id);

        favoriteNode.addEventListener('click', () => {
            //add a favorite class
            if(isFavorite) {
                isFavorite = false;
                favoriteNode.classList.remove('favorite');
                favoritedAlbumRef.remove();
                // favoriteNode.textContent = '🎵';
            } else {
                isFavorite = true;
                favoriteNode.classList.add('favorite');
                favoritedAlbumRef.set({
                    name: album.name,
                    images: album.images,
                    artists: album.artists
                });
                // favoriteNode.textContent = '🎵';
            }

            //add the album to favorites database
        });

        albumList.appendChild(albumCard);
    });
}

function clearDisplay() {
    while(albumList.children.length > 0) {
        albumList.lastElementChild.remove();
    }
}