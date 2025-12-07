const btn = document.querySelector('.button');
const video = document.querySelector('.video');
const text = document.querySelector('.text');

btn.addEventListener('click', () => {
    video.style.display = 'block';
    video.currentTime = 0;
    video.play();
    btn.style.display = 'none';
    text.style.display = 'block';

    setTimeout(() => {
        video.style.display = 'none';
        video.pause();
        btn.style.display = 'flex';
        text.style.display = 'none';
    }, 60500);
});

text.addEventListener('click', () => {
    video.style.display = 'none';
    video.pause();
    btn.style.display = 'flex';
    text.style.display = 'none';
});

