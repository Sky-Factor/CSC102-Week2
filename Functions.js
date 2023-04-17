function simpleDo() {
//defines needed data
    //set time
    var currTime = 10;
    //gives i a unit number to count by
    var i = 1;
//function
    do {
        //replaces text with what is written here
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "Formating In " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        i += 1; 
        //defines when to stop
    } while (i < 12);
}