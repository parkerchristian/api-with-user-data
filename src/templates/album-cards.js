export function makeAlbumCard(album) {
    const html = `
        <li>
            <h2>${album.name}</h2>
            <img src="${album.images[0].url}">
            <h2>${album.artists[0].name}</h2>
        </li>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
