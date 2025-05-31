const video = document.getElementById("video-blur");

video.addEventListener('timeupdate', () => {
    if(video.currentTime >= 4){
        video.classList.add('blur');
    }
});

const image = document.getElementById("hero-heading");

video.addEventListener('timeupdate', () => {
    if(video.currentTime >= 5){
        image.classList.add('appear');
    }
});