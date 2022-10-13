function playVideo() {

    const vidWrapper = document.querySelector('div.player');
    const myVid = vidWrapper.querySelector('video.player__video');

    const mainPlay = vidWrapper.querySelector('.player .play');
    const controlPlay = vidWrapper.querySelector('.player__button');
    const controlVol = vidWrapper.querySelector('.player__slider[name="volume"]');
    const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
    const controlProgress = vidWrapper.querySelector('.progress');
    const progress = vidWrapper.querySelector('.progress');
    const progressBar = vidWrapper.querySelector('.progress__filled');
    const mute = vidWrapper.querySelector('.player__button.volume');


    let drag;
    let grap;

    // myVid.addEventListener('click', toggleVideo);
     mainPlay.addEventListener('click', toggleVideo);
    controlPlay.addEventListener('click', toggleVideo);
    controlVol.addEventListener('change', updateVol);
    mute.addEventListener('click', muteVolume);
    controlProgress.addEventListener('mouseover', function(){drag = true});
    controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
    controlProgress.addEventListener('mousedown', function(){grap = drag});
    controlProgress.addEventListener('mouseup', function(){grap = false});
    controlProgress.addEventListener('click', updateCurrentPos);
    controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});
    controlFullScreen.addEventListener('click', goFullScreen);
    let progression;


    function toggleVideo() {
        mainPlay.classList.add('play-hide');
        if (myVid.paused) {
            controlPlay.setAttribute('style', '-webkit-mask-image: url("./assets/svg/pause.svg"); width:36px; height:36px;  margin-right:0;');
            mainPlay.setAttribute('style', '-webkit-mask-image: url("./assets/svg/pause.svg");');
            myVid.play();
            updateProgress();
            progression = window.setInterval(updateProgress, 200);
        } else {
            myVid.pause();
            controlPlay.setAttribute('style', '-webkit-mask-image: url("./assets/svg/play.svg");');
            mainPlay.setAttribute('style', '-webkit-mask-image: url("./assets/svg/play-big.svg");');
            clearInterval(progression);
        }
    }
    function updateVol(){
        const volume = this.value;
        myVid.volume = volume;
        if (volume==0) {
            mute.setAttribute('style', '-webkit-mask-image: url("./assets/svg/mute.svg");');
        }
        else {
            mute.setAttribute('style', '-webkit-mask-image: url("./assets/svg/volume.svg");');
        }
    }

    function updateProgress() {
        const progress = myVid.currentTime / myVid.duration;
        progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
    }
    function updateCurrentPos(e){
        // offset of the progress bar / video wrapper width
        const newProgress = (e.clientX - (progress.offsetLeft/0.28)) / (progress.clientWidth);
        progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
        myVid.currentTime = newProgress * myVid.duration;
    }

    function muteVolume() {
        if (myVid.muted) {
            mute.setAttribute('style', '-webkit-mask-image: url("./assets/svg/volume.svg");');
            myVid.muted=false;
        } else {
            myVid.muted=true;
            mute.setAttribute('style', '-webkit-mask-image: url("./assets/svg/mute.svg");');
        }
    }

    function goFullScreen(){
        if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
    }

}

export default playVideo;