
// this stops a keyframe being used in author_skills.html include. the keyframe should be integrated with main.scss
function removeGrow() {
    document.querySelector('.grow').classList.remove('grow');
}
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(removeGrow, 800);
});