
function changetheme(){
    let movieSlct = document.getElementById('movie') as HTMLSelectElement;
    var slectedMovie : any = movieSlct.options[movieSlct.selectedIndex].value;
    parseInt(slectedMovie);

    if(slectedMovie == 10){
        //zählt runter bis start
        var token : NodeJS.Timeout;//NodeJS.timeout;
        var area : HTMLElement | any = document.getElementById("test");
        var i : number = 10;
        token = setInterval(() => timer, 1000);

        function timer(){
            if(i <= 0){
                clearInterval(token);
                changeStyle();
            }
            else{
                i -= 1
                area.innerHTML = i;
            }
        }
        function changeStyle(){
            //sets layout
            let screen = document.getElementById("screen") as HTMLElement;
            let movie = document.getElementById("movie") as HTMLElement;
            let button = document.getElementById("bestellung") as HTMLElement;
            
            screen.style.backgroundImage = "url(./avengers_screen.gif)";
            movie.style.color = "black";
            movie.style.background = "purple";
            button.style.color = "black";
            button.style.background = "purple";
           
        }
    }

    else if (slectedMovie == 12){
        //zählt runter bis start
        var token : NodeJS.Timeout;
        var area : HTMLElement | any = document.getElementById("test");
        var i : number = 10;
        token = setInterval(() => timer, 1000);

        function timer(){
            if(i <= 0){
                clearInterval(token);
                changeStyle();
            }
            else{
                i -= 1
                area.innerHTML = i;
            }
        }

        function changeStyle(){
            //sets layout
            let screen = document.getElementById("screen") as HTMLElement;
            let movie = document.getElementById("movie") as HTMLElement;
            let button = document.getElementById("bestellung") as HTMLElement;
            
            screen.style.backgroundImage = "url(./joker.gif)";
            movie.style.color = "white";
            movie.style.background = "green";
            button.style.color = "white";
            button.style.background = "green";
            
        }
    }

    else if(slectedMovie == 8){
        var token : NodeJS.Timeout;
        var area : HTMLElement | any = document.getElementById("test");
        var i : number = 10;
        token = setInterval(() => timer, 1000);

        function timer(){
            if(i <= 0){
                clearInterval(token);
                changeStyle();
            }
            else{
                i -= 1
                area.innerHTML = i;
            }
        }
        function changeStyle(){
            //sets layout
            let screen = document.getElementById("screen") as HTMLElement;
            let movie = document.getElementById("movie") as HTMLElement;
            let button = document.getElementById("bestellung") as HTMLElement;
            
            screen.style.backgroundImage = "url(./ts4.gif)";
            movie.style.color = "white";
            movie.style.background = "red";
            button.style.color = "white";
            button.style.background = "red";
            
        }
    }

    else if(slectedMovie == 9){
        var token : NodeJS.Timeout;
        var area : HTMLElement | any = document.getElementById("test");
        var i : number = 10;
        token = setInterval(() => timer, 1000);

        function timer(){
            if(i <= 0){
                clearInterval(token);
                changeStyle();
            }
            else{
                i -= 1
                area.innerHTML = i;
            }
        }
        function changeStyle(){
            //sets layout
            let screen = document.getElementById("screen") as HTMLElement;
            let movie = document.getElementById("movie") as HTMLElement;
            let button = document.getElementById("bestellung") as HTMLElement;
            
            screen.style.backgroundImage = "url(./lion.gif)";
            movie.style.color = "black";
            movie.style.background = "orange";
            button.style.color = "black";
            button.style.background = "orange";
            
        }
    }
    else{
        console.log("No movie selected");
    }
}

function validator(){
    var orderButton = document.getElementById("bestellung") as HTMLInputElement;
    var textArea = document.getElementById("ajaxArea") as HTMLElement;
    var img1 = document.getElementById("img1") as HTMLElement;
    var img2 = document.getElementById("img2") as HTMLElement;
    var gamebutton = document.getElementById("gamebutton") as HTMLInputElement;
    var clicked : number;
    clicked = 0;

    orderButton.disabled = true;
    textArea.innerHTML += '<button id="gamebutton">Klick me for a chance to get 50% off</button>';
    img1.style.backgroundImage = "url(./dog.gif)";
    img2.style.backgroundImage = "url(./crazy.gif)";
    gamebutton.style.textAlign = "center";
    gamebutton.style.background = "cyan";
    gamebutton.style.borderRadius = "5px";

    gamebutton?.addEventListener("click", winorNot);

    function winorNot(){
        if(clicked < 1){
            clicked++;
            var numberRow : Array<Number>
            var i : number;
            var won : void;

            numberRow = new Array;

            numberRow[0] = 1;
            numberRow[1] = 2;
            numberRow[2] = 3;
            numberRow[3] = 4;
            numberRow[4] = 5;
            numberRow[5] = 6;
//ändern
            i = Math.floor(Math.random() * 6) + 1;

            var chanceToWin = new Promise ((resolve, reject) =>{
                if(numberRow[i] > 2){
                    textArea.innerHTML += '<h4>' + numberRow[i] + '</h4>';
                    won = alert("Congratulation. You've won. Look at the Price. It's now 50% off.");

                    console.log("The number is: " + numberRow[i]);
          
                    resolve(won);
                }
                else{
                    let reason : any;

                    textArea.innerHTML += '<h4>' + numberRow[i] + '</h4>';
                    won = alert("Sorry You've lost");
                    console.log("The number is: " + numberRow[i])
                    reject(reason);
                }
            });
        var runGame : any;
        runGame = function(){
            chanceToWin.then(function(fulfilled: any){
                alert(fulfilled);
            })
            .catch(function(error: any){
                alert(error.message);
            });
        }
        runGame();
        }
        gamebutton.disabled = true;
    }
}