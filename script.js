document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-primary').addEventListener('click', () => {
        alert('Navigating to deals...');
    });

    document.querySelector('.btn-secondary').addEventListener('click', () => {
        alert('Viewing retailers...');
    });

    document.querySelector('.fab').addEventListener('click', () => {
        alert('Opening Kimi Agent...');
    });

    document.querySelector('.location-btn').addEventListener('click', () => {
        alert('Select location');
    });

    document.querySelector('.calendar-btn').addEventListener('click', () => {
        alert('Open calendar');
    });

    document.querySelector('.menu-btn').addEventListener('click', () => {
        alert('Open menu');
    });

    document.querySelector('.back-btn').addEventListener('click', () => {
        alert('Go back');
    });

    document.querySelector('.share-btn').addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'One Shop Style Hub',
                text: 'Check out these fashion + tech deals!',
                url: window.location.href
            });
        } else {
            alert('Share this page');
        }
    });
});
