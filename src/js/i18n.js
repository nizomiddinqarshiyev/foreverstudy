document.addEventListener('DOMContentLoaded', function() {
    const defaultLang = 'uz';
    let currentLang = localStorage.getItem('lang') || defaultLang;

    // Check if translations exist on window
    const trans = window.translations || {};

    function applyTranslations(lang) {
        if (!trans[lang]) return;

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = trans[lang][key];
            if (translation !== undefined) {
                // If translation contains HTML tags or specific keys, use innerHTML, else textContent
                if (key === 'site-test-text' || key === 'stats-title' || key === 'faq-contact-desc' || translation.includes('<') || translation.includes('&')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Update document lang attribute and title
        document.documentElement.lang = lang;

        // Update active language in dropdown
        const activeTextEl = document.querySelector('.lang-btn-text');
        const activeFlagEl = document.querySelector('.lang-btn-flag');
        if (activeTextEl && activeFlagEl) {
            if (lang === 'uz') {
                activeTextEl.textContent = 'O\'zbekcha';
                activeFlagEl.textContent = '🇺🇿';
            } else if (lang === 'en') {
                activeTextEl.textContent = 'English';
                activeFlagEl.textContent = 'EN';
            } else if (lang === 'ko') {
                activeTextEl.textContent = '한국어';
                activeFlagEl.textContent = '🇰🇷';
            }
        }

        // Highlight selected option in dropdown list
        document.querySelectorAll('.lang-option').forEach(opt => {
            if (opt.getAttribute('data-value') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });
    }

    // Set up dropdown events
    const dropdown = document.querySelector('.lang-dropdown');
    const dropdownBtn = document.querySelector('.lang-dropdown-btn');

    if (dropdown && dropdownBtn) {
        dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLang = this.getAttribute('data-value');
                currentLang = selectedLang;
                localStorage.setItem('lang', selectedLang);
                applyTranslations(selectedLang);
                dropdown.classList.remove('open');
            });
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', function() {
            dropdown.classList.remove('open');
        });
    }

    
    // Initialize translations
    applyTranslations(currentLang);
});
