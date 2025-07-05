let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let currTime = document.getElementById("time");
const clickSound = new Audio('click_sound.mp3')
resetBtn.addEventListener("click", ()=>{
    //console.log('Button was clicked');
    clickSound.play()
    if(timer){
        clearInterval(timer);
        timer = null;
    }
    secs = 0;
    currTime.innerText = '00:00:00';
    //character.classList.remove("bouncing");
    character.style.display = "none";
});
let secs = 0;
let timer = null;

function updateDisp(){
    const hrs = String(Math.floor(secs/3600)).padStart(2, "0");
    const mins = String(Math.floor((secs%3600)/60)).padStart(2, "0");
    const sec = String(Math.floor(secs%60)).padStart(2, "0");
    currTime.innerText = `${hrs}:${mins}:${sec}`;

}

startBtn.addEventListener("click", ()=>{
    clickSound.play();
    if(timer)return;
    character.style.display = "block";
    character.classList.add("bouncing");
    timer = setInterval(()=>{
        secs++;
        updateDisp();
    }, 1000);    

});

stopBtn.addEventListener("click", ()=>{
    clickSound.play();
    if(timer){
        clearInterval(timer);
        timer = null;
    }
    secs = 0;
    //currTime.innerText = '00:00:00';
    character.classList.remove("bouncing"); 

})