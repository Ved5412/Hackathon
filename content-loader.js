// content-loader.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => populateContent(data))
        .catch(error => console.error('Error loading content:', error));
});

function populateContent(content) {
    const container = document.getElementById('content-list');

    content.categories.forEach(category => {
        const section = document.createElement('div');
        section.className = 'content-section';

        const header = document.createElement('h3');
        header.textContent = category.title;
        header.className = 'section-header';

        const list = document.createElement('ul');
        category.items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'content-item';
            li.innerHTML = `
                <i class="${item.icon}"></i>
                <span>${item.title}</span>
            `;
            li.addEventListener('click', () => loadContent(item));
            list.appendChild(li);
        });

        section.appendChild(header);
        section.appendChild(list);
        container.appendChild(section);
    });
}

function loadContent(item) {
    const viewer = document.getElementById('content-frame');
    viewer.innerHTML = `
        <h2>${item.title}</h2>
        <div class="content-body">${item.content}</div>
    `;
}