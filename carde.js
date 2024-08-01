document.addEventListener('DOMContentLoaded', function () {
    showSection('live');
});

function showSection(section) {
    const sections = document.querySelectorAll('.event-cards');
    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    document.getElementById(section + '-section').style.display = 'block';

    // Initialize Swiper.js for the visible section
    new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });

    // Add touch support for mobile devices
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.classList.add('touch');
        });
        card.addEventListener('touchend', () => {
            card.classList.remove('touch');
        });
    });

    // Start the timeline for live events
    if (section === 'live') {
        const timelines = document.querySelectorAll('.timeline');
        timelines.forEach(timeline => {
            updateTimeline(timeline);
            setInterval(() => updateTimeline(timeline), 1000);
        });
    }
}

function navigateToEvent(url) {
    window.location.href = url;
}

function updateTimeline(timeline) {
    const now = new Date().getTime();
    const eventTime = new Date(timeline.dataset.endTime).getTime(); // Use dataset to get end time
    const distance = eventTime - now;

    if (distance < 0) {
        timeline.querySelector('.countdown').innerText = 'Event has ended';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timeline.querySelector('.countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
