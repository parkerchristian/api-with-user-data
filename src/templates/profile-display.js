export function makeProfileDisplay(user) {
    const html = `
        <span id="profile-display">
            <img src="${user.photoURL}">
            <h2>${user.displayName}</h2>
            <input type="submit" value="Sign Out">
        </span>
    `; 

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
