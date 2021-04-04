//Global area
var col = null;

window.onload = function () {
    //Try and use classname to get a group of divs instead of getting them one by one by id
    //if you are writing the same type of code multiple times, you are doing it incorrect

    //Attach events using eventlistener here

    col = document.getElementsByClassName("col");
    document.getElementById("wrapper").addEventListener('click', function () {
        userTurn(col);
    }, false);


}
 

//function provided. Add parameter(s) if needed
function userTurn(col) {
    //Add code here
    for (var i = 0; i < col.length; i++) {
        if (col[i].innerText !== "O" && col[i].innerText == "") {
            col[i].innerText = "X";
            break;
        }
    }
     computerTurn(col);
}

 
function computerTurn(col) {
 
    for (var i = 0; i < col.length; i++) {
        if (col[i].innerText !== "X" && col[i].innerText == "") {
            col[i].innerText = "O";
            break;
        }
    }
}

function ResetGame() {
    col = document.getElementsByClassName("col");
    var status = document.getElementById("status").innerHTML = "Game has renewed , good luck!!"
    for (var i = 0; i < col.length; i++) {

        col[i].innerHTML = "";
        console.log(col[i]);
    }
}


