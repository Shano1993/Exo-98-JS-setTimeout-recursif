
// set timeinterval
let min = 0;
let intervalDiv = document.getElementById('interval-div');

 let timeoutPersonnal = function () {
    let intervalId = setInterval(function () {
        if (min < 600) {
            intervalDiv.innerHTML = min += 60;
            timeoutPersonnal();
        }
        else {
            document.getElementById('interval-stop').addEventListener("click", function () {
                clearInterval(intervalId);
            })
        }
    }, 60000);
};

document.getElementById('interval-start').addEventListener("click", timeoutPersonnal);