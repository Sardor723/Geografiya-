document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sinf = urlParams.get('sinf');
    const mavzu = urlParams.get('mavzu');
    
    if (sinf) {
        document.getElementById('sinf-title').textContent = `${sinf}-sinf`;
        loadContent('mavzular');
    }

    if (mavzu) {
        document.getElementById('mavzu-title').textContent = `Mavzu ${mavzu}`;
        loadMavzuContent(mavzu);
    }
});

function loadContent(type) {
    const content = document.getElementById('content');
    const urlParams = new URLSearchParams(window.location.search);
    const sinf = urlParams.get('sinf');

    content.innerHTML = '';

    if (type === 'mavzular') {
        for (let i = 1; i <= 10; i++) {
            content.innerHTML += `<h3>${sinf}-sinf Mavzu ${i}</h3>
            <ul>
                <li><a href="mavzu.html?sinf=${sinf}&mavzu=${i}">Mavzu ${i} Ma'lumot</a></li>
            </ul>`;
        }
    } else if (type === 'slaydlar') {
        for (let i = 1; i <= 10; i++) {
            content.innerHTML += `<h3>${sinf}-sinf Mavzu ${i} Slaydlar</h3>
            <ul>
                <li><a href="#">Slayd ${i} Fayl</a></li>
            </ul>`;
        }
    } else if (type === 'xaritalar') {
        for (let i = 1; i <= 10; i++) {
            content.innerHTML += `<h3>${sinf}-sinf Mavzu ${i} Xaritalar</h3>
            <ul>
                <li><a href="#">Xarita ${i}</a></li>
            </ul>`;
        }
    } else if (type === 'videolar') {
        for (let i = 1; i <= 10; i++) {
            content.innerHTML += `<h3>${sinf}-sinf Mavzu ${i} Videolar</h3>
            <ul>
                <li><a href="#">Video ${i}</a></li>
            </ul>`;
        }
    }
}

function loadMavzuContent(mavzu) {
    const content = document.getElementById('mavzu-content');

    content.innerHTML = `<h3>Mavzu ${mavzu} Ma'lumotlar</h3>
    <p>Bu yerda ${mavzu} mavzuga oid ma'lumotlar bo'ladi.</p>`;
}
