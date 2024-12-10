const navLinkEls = document.querySelectorAll('.nav-items a');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'about';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop-sectionEl.clientHeight / 2.)) {
            currentSection = sectionEl.id;
        }
    });
    
    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active-nav').classList.remove('active-nav');
            navLinkEl.classList.add('active-nav');
        }
    });
});
