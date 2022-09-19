export function renderMushroom(mushroom) {
    const img = document.createElement('img');
    img.src = 'assets/mushrooms/' + mushroom.type + '.png';
    img.alt = mushroom.type;
    return img;
}

// Emojis correspond to satisfaction via index
const emojis = ['😒', '😐', '😀', '😋'];

export function renderFriend(friend) {
    const button = document.createElement('button');
    button.classList.add('friend');

    const nameEl = document.createElement('span');
    nameEl.classList.add('name');
    nameEl.textContent = friend.name;

    const emojiEl = document.createElement('span');
    emojiEl.classList.add('emoji');
    emojiEl.textContent = emojis[friend.satisfied];

    button.append(nameEl, emojiEl);

    return button;
}
