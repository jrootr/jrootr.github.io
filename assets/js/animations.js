
// this stops a keyframe being used in author_skills.html include. the keyframe should be integrated with main.scss when possible
function removeGrow(elem) {
    elem.classList.remove('grow');
};

function addGrow(elem) {
    elem.classList.add('grow');
};

function showGrow(entries) {
    entries.forEach(entry => {
        addGrow(entry.target);
        setTimeout(function() {removeGrow(entry.target)}, 1200);
    });
};

let skillbar_observer = {
    rootMargin: '0px',
    threshold: 1.0
}

document.addEventListener('DOMContentLoaded', () => {
    let observer = new IntersectionObserver(showGrow, skillbar_observer);
    let target = document.querySelector('.watch-grow');
    observer.observe(target);
});