
// this stops a keyframe being used in author_skills.html include. the keyframe should be integrated with main.scss when possible
function removeGrow(elem) {
    console.log('that')
    elem.classList.remove('grow');
};

function addGrow(elem) {
    console.log('this')
    elem.classList.add('grow');
};

function showGrow(entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
        addGrow(entry.target);
        setTimeout(function() {removeGrow(entry.target)}, 1800);
    });
    console.log(observer);
};

// document.addEventListener('DOMContentLoaded', () => {
//     showGrow(document.querySelector('.watch-grow'));
// });


let skillbar_observer = {
    rootMargin: '0px',
    threshold: 1.0
}

document.addEventListener('DOMContentLoaded', () => {
    let observer = new IntersectionObserver(showGrow, skillbar_observer);
    let target = document.querySelector('.watch-grow');
    observer.observe(target);
});