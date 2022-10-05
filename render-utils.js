export function renderPost(post) {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = post.image_url;

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const desc = document.createElement('p');
    desc.textContent = post.description;

    const contact = document.createElement('p');
    contact.textContent = post.contact;

    const span = document.createElement('span');
    span.textContent = getCategoryEmoji(post.category);

    li.append(h2, span, desc, img, contact);

    return li;
}

function getCategoryEmoji(category) {
    if (category === 'event') return '🎉';
    if (category === 'coding') return '💻';
    if (category === 'pet') return '😺';
    if (category === 'food') return '🍗';
}
