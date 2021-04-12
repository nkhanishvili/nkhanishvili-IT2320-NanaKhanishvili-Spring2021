//Global area
var div = null;
var winningPos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


window.onload = function () {

    document.addEventListener('click', function (elem) {

        elem = elem || window.event;

        div = elem.target || elem.srcElement;
        if (div.id == 'reset') {

            ResetGame();

        }


        else if (div.className == 'col' && div.innerText == "") {


            if (document.getElementById('status').innerText == "Game Over") {

                resetGameBoard();

            } else {

                userTurn();

            }

        }

    }, false);

}




function userTurn() {

    div.innerText = "X";

    if (determineWinner("X")) {

        document.getElementById('message').innerText = "Good Job! You won the game!!!";

    } else {
        computerTurn();
    }

}
function computerTurn() {

    var divs = document.getElementsByClassName("col");

    for (var i = 0; i < divs.length; i++) {

        if (divs[i].innerText == "") {

            divs[i].innerText = "O";

            break;

        }

    }
}
function ResetGame() {
    col = document.getElementsByClassName("col");
    var status = document.getElementById("status").innerHTML = "Game has renewed , good luck!!"
    for (var i = 0; i < col.length; i++) {

        col[i].innerHTML = status;

    }
}


function determineWinner(elem) {
 
    var cols = document.getElementsByClassName("col");
 
    for (x = 0; x < winningPos.length; x++) {

        if (cols[winningPos[x][0]].innerText == elem &&

            cols[winningPos[x][1]].innerText == elem &&

            cols[winningPos[x][2]].innerText == elem) {
 
            document.getElementById('status').innerText = "Game Over";

            return true;

        }

    }

    return false;

}