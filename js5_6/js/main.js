var btnStart = document.querySelector('.timerGoBtn');
var btnSplit = document.querySelector('.timerSplitBtn');
var btnReset = document.querySelector('.timerResetBtn');
var display = document.querySelector('.timerDisp');
var Stops = document.querySelector('.timerStopsSect');
var counterValue;
var startTime;
var runInterval;
var stageCounter;
var intervalID;
var runMode = true;

btnStart.addEventListener('click',
    function () {
        if (runMode) {
            appendShot('Stop');
            btnStart.innerHTML = 'Go!';
            stopTimer();
        } else {
            btnStart.innerHTML = 'Stop!';
            startTime = Date.now();
            counterValue += runInterval;
            startTimer();
        }
    }
);

btnSplit.addEventListener('click',
    function() {
        if (runMode) appendShot('Split');
    }
)

btnReset.addEventListener('click', btnResetHandler);
btnResetHandler();

function btnResetHandler() {
    stopTimer();
    display.innerHTML = format(0);
    Stops.innerHTML = '';
    stageCounter = 1;
    counterValue = runInterval = 0;
    btnStart.innerHTML = 'GO!';
}

function timerHandler(e) {
    runInterval = Date.now() - startTime;
    display.innerHTML = format(counterValue + runInterval);
}

function startTimer() {
    intervalID = setInterval(timerHandler, 27);
    runMode = true;
}

function stopTimer() {
    clearInterval(intervalID);
    runMode = false;
}

function format(ms) {
    var d = new Date(ms).toUTCString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1');
    var x = String(ms % 1000);
    while(x.length < 3) x='0'+x;
    d += '.' + x;
    return d;
}

function appendShot(label) {
    var txt = [stageCounter++, label, format(runInterval)];
    var newElem;
    newElem = document.createElement('p');
    newElem.innerHTML = txt.join(' ');
    Stops.appendChild(newElem);
}