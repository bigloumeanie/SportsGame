function teamOneShot() {
    teamOneNumShots += 1;
    var shotResult = Math.floor(Math.random() * 2);
    if (shotResult === 1) {
        teamOneNumGoals += 1;
        }

    document.getElementById("teamone-numshots").innerHTML = teamOneNumShots;
    document.getElementById("teamone-numgoals").innerHTML = teamOneNumGoals;
}

var teamOneShoot = document.getElementById("teamone-shoot-button");
teamOneShoot.addEventListener("click", teamOneShot);

function teamTwoShot() {
    teamTwoNumShots += 1;
    var shotResult = Math.floor(Math.random() * 2);
    if (shotResult === 1) {
        teamTwoNumGoals += 1;
        }
    document.getElementById("teamtwo-numshots").innerHTML = teamTwoNumShots;
    document.getElementById("teamtwo-numgoals").innerHTML = teamTwoNumGoals;
    }

var teamTwoShoot = document.getElementById("teamtwo-shoot-button");
teamTwoShoot.addEventListener("click", teamTwoShot);

function resetGame() {
    numResets += 1;
    teamOneNumShots = 0;
    teamOneNumGoals = 0;
    teamTwoNumShots = 0;
    teamTwoNumGoals = 0;
    document.getElementById("teamone-numshots").innerHTML = teamOneNumShots;
    document.getElementById("teamone-numgoals").innerHTML = teamOneNumGoals;
    document.getElementById("teamtwo-numshots").innerHTML = teamTwoNumShots;
    document.getElementById("teamtwo-numgoals").innerHTML = teamTwoNumGoals;
    document.getElementById("num-resets").innerHTML = numResets;
    }

var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

var teamOneNumShots = 0;
var teamOneNumGoals = 0;
var teamTwoNumShots = 0;
var teamTwoNumGoals = 0;
var numResets = 0;





