
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
        box.style.transition = 'transform 0.3s';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});
