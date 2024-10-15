const display = document.getElementById('display')
let timer = null;
let startTime = 0;
let elapsTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsTime;
        timer = setInterval(update, 10)
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer)
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    elapsTime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`;
}

function update(){

    let currentTime = Date.now();
    elapsTime = currentTime - startTime;

    let hours = Math.floor(elapsTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsTime / (1000 *60) % 60);
    let seconds = Math.floor(elapsTime / 1000 % 60)
    let miliseconds = Math.floor(elapsTime % 1000 / 10)

    display.textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}:${miliseconds.toString().padStart(2,0)}`
}