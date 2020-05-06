"use strict";
function changetheme() {
    let movieSlct = document.getElementById('movie');
    var slectedMovie = movieSlct.options[movieSlct.selectedIndex].value;
    parseInt(slectedMovie);
    if (slectedMovie == 10) {
        //zählt runter bis start
        var token; //NodeJS.timeout;
        var area = document.getElementById("test");
        var i = 10;
        token = setInterval(() => timer, 1000);
        function timer() {
            if (i <= 0) {
                clearInterval(token);
                changeStyle();
            }
            else {
                i -= 1;
                area.innerHTML = i;
            }
        }
        function changeStyle() {
            //sets layout
            let screen = document.getElementById("screen");
            let movie = document.getElementById("movie");
            let button = document.getElementById("bestellung");
            screen.style.backgroundImage = "url(./avengers_screen.gif)";
            movie.style.color = "black";
            movie.style.background = "purple";
            button.style.color = "black";
            button.style.background = "purple";
        }
    }
    //interface möglich!!
    else if (slectedMovie == 12) {
        //zählt runter bis start
        var token;
        var area = document.getElementById("test");
        var i = 10;
        token = setInterval(() => timer, 1000);
        function timer() {
            if (i <= 0) {
                clearInterval(token);
                changeStyle();
            }
            else {
                i -= 1;
                area.innerHTML = i;
            }
        }
        function changeStyle() {
            //sets layout
            let screen = document.getElementById("screen");
            let movie = document.getElementById("movie");
            let button = document.getElementById("bestellung");
            screen.style.backgroundImage = "url(./joker.gif)";
            movie.style.color = "white";
            movie.style.background = "green";
            button.style.color = "white";
            button.style.background = "green";
        }
    }
    else if (slectedMovie == 8) {
        var token;
        var area = document.getElementById("test");
        var i = 10;
        token = setInterval(() => timer, 1000);
        function timer() {
            if (i <= 0) {
                clearInterval(token);
                changeStyle();
            }
            else {
                i -= 1;
                area.innerHTML = i;
            }
        }
        function changeStyle() {
            //sets layout
            let screen = document.getElementById("screen");
            let movie = document.getElementById("movie");
            let button = document.getElementById("bestellung");
            screen.style.backgroundImage = "url(./ts4.gif)";
            movie.style.color = "white";
            movie.style.background = "red";
            button.style.color = "white";
            button.style.background = "red";
        }
    }
    else if (slectedMovie == 9) {
        var token;
        var area = document.getElementById("test");
        var i = 10;
        token = setInterval(() => timer, 1000);
        function timer() {
            if (i <= 0) {
                clearInterval(token);
                changeStyle();
            }
            else {
                i -= 1;
                area.innerHTML = i;
            }
        }
        function changeStyle() {
            //sets layout
            let screen = document.getElementById("screen");
            let movie = document.getElementById("movie");
            let button = document.getElementById("bestellung");
            screen.style.backgroundImage = "url(./lion.gif)";
            movie.style.color = "black";
            movie.style.background = "orange";
            button.style.color = "black";
            button.style.background = "orange";
        }
    }
    else {
        console.log("No movie selected");
    }
}
function validator() {
    var orderButton = document.getElementById("bestellung");
    var textArea = document.getElementById("ajaxArea");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var gamebutton = document.getElementById("gamebutton");
    var clicked;
    clicked = 0;
    orderButton.disabled = true;
    textArea.innerHTML += '<button id="gamebutton">Klick me for a chance to get 50% off</button>';
    img1.style.backgroundImage = "url(./dog.gif)";
    img2.style.backgroundImage = "url(./crazy.gif)";
    gamebutton.style.textAlign = "center";
    gamebutton.style.background = "cyan";
    gamebutton.style.borderRadius = "5px";
    gamebutton === null || gamebutton === void 0 ? void 0 : gamebutton.addEventListener("click", winorNot);
    function winorNot() {
        if (clicked < 1) {
            clicked++;
            var numberRow;
            var i;
            var won;
            numberRow = new Array;
            numberRow[0] = 1;
            numberRow[1] = 2;
            numberRow[2] = 3;
            numberRow[3] = 4;
            numberRow[4] = 5;
            numberRow[5] = 6;
            //ändern
            i = Math.floor(Math.random() * 6) + 1;
            var chanceToWin = new Promise((resolve, reject) => {
                if (numberRow[i] > 2) {
                    textArea.innerHTML += '<h4>' + numberRow[i] + '</h4>';
                    won = alert("Congratulation. You've won. Look at the Price. It's now 50% off.");
                    console.log("The number is: " + numberRow[i]);
                    resolve(won);
                }
                else {
                    let reason;
                    textArea.innerHTML += '<h4>' + numberRow[i] + '</h4>';
                    won = alert("Sorry You've lost");
                    console.log("The number is: " + numberRow[i]);
                    reject(reason);
                }
            });
            var runGame;
            runGame = function () {
                chanceToWin.then(function (fulfilled) {
                    alert(fulfilled);
                })
                    .catch(function (error) {
                    alert(error.message);
                });
            };
            runGame();
        }
        gamebutton.disabled = true;
    }
}
