// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3500);
    }
});
// ...existing code...// This file is intentionally left blank.

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    // Slider code...
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3500);
    }
    window.addEventListener('scroll', handleStatsAnimation);
    handleStatsAnimation();
});
// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    // ...other code...

    // EMU stats animated counter
    function animateStatNumber(el, target, duration = 1600) {
        let start = 0;
        let startTime = null;
        target = +target;
        const isPercent = el.textContent.trim().endsWith('%');
        const isPlus = el.textContent.trim().endsWith('+');

        function updateCount(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            let value = Math.floor(progress * (target - start) + start);

            // Format for percent or plus
            if (isPercent) el.textContent = value + '%';
            else if (isPlus) el.textContent = value + '+';
            else el.textContent = value;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                // Set final value
                if (isPercent) el.textContent = target + '%';
                else if (isPlus) el.textContent = target + '+';
                else el.textContent = target;
            }
        }
        requestAnimationFrame(updateCount);
    }

    let statsAnimated = false;
    function handleStatsAnimation() {
        const statsSection = document.querySelector('.emu-stats-section');
        if (!statsSection) return;
        const rect = statsSection.getBoundingClientRect();
        if (!statsAnimated && rect.top < window.innerHeight && rect.bottom > 0) {
            document.querySelectorAll('.emu-stat-number').forEach(el => {
                // Remove non-numeric for animation, get target from data-target or textContent
                let target = el.dataset.target || el.textContent.replace(/\D/g, '');
                animateStatNumber(el, target);
            });
            statsAnimated = true;
        }
    }
    window.addEventListener('scroll', handleStatsAnimation);
    handleStatsAnimation();

    // ...other code...
});

document.addEventListener('DOMContentLoaded', function() {
    // ...boshqa kodlar ...

    // Testimonial carousel
    const track = document.querySelector('.testimonial-track');
    const videos = document.querySelectorAll('.testimonial-video');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function visibleCount() {
        if (window.innerWidth < 600) return 1;
        if (window.innerWidth < 900) return 1;
        if (window.innerWidth < 1200) return 2;
        return 3;
    }

    function updateSlider() {
        const count = visibleCount();
        const maxIndex = Math.max(0, videos.length - count);
        if (currentIndex < 0) currentIndex = maxIndex;
        if (currentIndex > maxIndex) currentIndex = 0;
        const videoWidth = videos[0].offsetWidth + 24; // 24px gap
        const offset = -(currentIndex * videoWidth);
        track.style.transform = `translateX(${offset}px)`;
    }

    prevBtn && prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateSlider();
    });
    nextBtn && nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);
    updateSlider();

    // ...other code...
});



// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    // ...slider va boshqa kodlar...

    // WHY SECTION CARD ANIMATION
    function animateWhyCards() {
        const cards = document.querySelectorAll('.why-card');
        const trigger = window.innerHeight * 0.92;
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < trigger) {
                card.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', animateWhyCards);
    animateWhyCards();
});
// ...existing code...

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    // ...boshqa kodlar...

    // Hero konsultatsiya modal
    const openHeroBtn = document.getElementById('openHeroModal');
    const closeHeroBtn = document.getElementById('closeHeroModal');
    const heroModal = document.getElementById('heroConsultModal');
    const heroForm = document.getElementById('heroConsultForm');
    const heroSuccess = document.getElementById('heroConsultSuccess');

    if (openHeroBtn && closeHeroBtn && heroModal) {
        openHeroBtn.onclick = (e) => {
            e.preventDefault();
            heroModal.classList.add('active');
        };
        closeHeroBtn.onclick = () => {
            heroModal.classList.remove('active');
            heroForm.style.display = '';
            heroSuccess.style.display = 'none';
        };
        window.addEventListener('click', (e) => {
            if (e.target === heroModal) {
                heroModal.classList.remove('active');
                heroForm.style.display = '';
                heroSuccess.style.display = 'none';
            }
        });
    }

    if (heroForm) {
        heroForm.onsubmit = function(e) {
            e.preventDefault();
            const formData = {
                name: heroForm.name.value,
                phone: heroForm.phone.value,
                email: heroForm.email.value,
                message: heroForm.message.value
            };
            fetch('https://script.google.com/macros/s/AKfycbwYW5sekmkmaBPke7vbTtfRHiMQ9Cbk4BJ9HCTRSCa3jrbVdEP-dTxLTgTERezRyqAR/exec', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                heroForm.style.display = 'none';
                heroSuccess.style.display = 'block';
            }).catch(() => {
                heroForm.style.display = 'none';
                heroSuccess.textContent = "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.";
                heroSuccess.style.display = 'block';
            });
        };
    }

    // ...boshqa kodlar... AKfycbwYW5sekmkmaBPke7vbTtfRHiMQ9Cbk4BJ9HCTRSCa3jrbVdEP-dTxLTgTERezRyqAR
});





