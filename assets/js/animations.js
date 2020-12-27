
let skillbar_observer = {
    rootMargin: '0px',
    threshold: 1.0
}

// shows growing progress bars for skills when scrolled into view
function addSkillListener(cls, watch_cls) {

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.add(cls);
            setTimeout(() => {entry.target.classList.remove(cls)}, 1200)
        })
    }, skillbar_observer);
    let target = document.querySelector(`.${watch_cls}`);
    observer.observe(target);
};
