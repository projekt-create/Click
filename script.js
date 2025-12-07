const btn = document.querySelector('.button');
const video = document.querySelector('.video');
const text = document.querySelector('.text');
let x = 0;

btn.addEventListener('click', () => {
    if (x == 0) {
        video.style.display = 'block';
        video.currentTime = 0;
        video.play();
        btn.style.display = 'none';
        text.style.display = 'block';
        x++;

        setTimeout(() => {
            if (x === 1) {
                video.style.display = 'none';
                video.pause();
                btn.style.display = 'flex';
                text.style.display = 'none';
            }
        }, 60000);
    }else{
        video.src = './ZWabdmcVTx6ZIuRTrnQb+O0nQe98w_9Y.mp4';
        video.style.display = 'block';
        video.currentTime = 0;
        video.play();
        btn.style.display = 'none';
        text.style.display = 'block';
        x++;

        setTimeout(() => {
            if (x === 1) {
                video.style.display = 'none';
                video.pause();
                btn.style.display = 'flex';
                text.style.display = 'none';
            }
        }, 24000);
    }
});

text.addEventListener('click', () => {
    video.style.display = 'none';
    video.pause();
    btn.style.display = 'flex';
    text.style.display = 'none';
});
