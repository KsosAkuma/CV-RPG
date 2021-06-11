const musicAndMe = document.querySelector('audio');
const btnMusic = document.getElementById('btnMusic');
const btnLoop = document.getElementById('btnLoop');

function playMusic() {
    musicAndMe.paused ? (musicAndMe.play(), btnMusic.classList.add('disabled'), btnMusic.nextElementSibling.innerHTML = "Pause") : 
    (musicAndMe.pause(), btnMusic.classList.remove('disabled'), btnMusic.nextElementSibling.innerHTML = "Play");
}

function loopSong() {
    musicAndMe.loop ? (musicAndMe.loop = false, btnLoop.classList.remove('disabled')) : 
    (musicAndMe.loop = true, btnLoop.classList.add('disabled'));
}
function checkEndSong() {
   if (musicAndMe.ended) {
    btnMusic.classList.remove('disabled');
   }
   requestAnimationFrame(checkEndSong);
}
btnLoop.addEventListener("click", loopSong,false);
btnLoop.nextElementSibling.addEventListener("click", loopSong,false);
btnMusic.addEventListener("click", playMusic,false);
btnMusic.nextElementSibling.addEventListener("click", playMusic,false);
window.requestAnimationFrame(checkEndSong);