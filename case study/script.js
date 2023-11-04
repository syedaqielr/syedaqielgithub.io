// JavaScript for changing link color on click
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = 'red';
    });
});
