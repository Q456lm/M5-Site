/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Quint Bunting
     Date: 2/5/2025

     Filename: js03.js
 */

let weekDays = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

window.addEventListener("load",addWeekdays);

function addWeekdays(){
    let i = 0
    let headingCells = document.getElementsByTagName("th");

    while (i < 7){
        headingCells[i].innerHTML = weekDays[i];
        i++;
    }
}

window.addEventListener("load", showGames);

function showGames() {
    for (let i=0; i < gameDates.length; i++){
        let gameInfo = "";

        switch (gameResults[i]){
            case "W":
                gameInfo += "<p class='win'>"
                break;
            case "L":
                gameInfo += "<p class='lose'>"
                break;
            case "S":
                gameInfo += "<p class='suspeneded'"
                break;
            case "P":
                gameInfo += "<p class='postponed'";
                break;
        }


        if (gameLoctions[i] == "h"){
            gameInfo += "vs. ";
        } else if (gameLocations[i] == "a"){
            gameInfo += "@ ";
        }

        gameInfo += gameResults[i] + "br";
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";
        
        if (gameInnings[i] < 5){
            gameInfo += " [" + gameInnings[i] +"]***";
        } else if (gameInnings[i] < 9){
            gameInfo += " [" + gameInnings[i]+"]*"
        } else if (gameInnings[i] > 9){
            gameInfo += " ["+ + gameInnings[i] + "]";
        }

        gameInfo += "</p>"

        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
    }
}


