

//Theme-Anpassung
function changetheme(){
    let movieSlct = document.getElementById('movie');
    var slectedMovie = movieSlct.options[movieSlct.selectedIndex].value;
    parseInt(slectedMovie);
    
    if(slectedMovie == 10){
      //zählt runter bis start
      var token = setInterval(timer, 1000); 
      var area = document.getElementById("test");
      var i = 10;
      function timer() {
      
          if (i <= 0) {
              clearInterval(token);
              changeStyle(); // Stop counting down.
          } else {
              i -= 1; // Countdown.
              area.innerHTML = i;
          }
      
      };

      function changeStyle(){
        let screen = document.getElementById("screen");
        screen.style.backgroundImage = "url(./avengers_screen.gif)";

        let movie = document.getElementById("movie");
        movie.style.background = "purple";
        movie.style.color = "black";
        let button = document.getElementById("bestellung");
        button.style.color = "black";
        button.style.background = "purple";
        let seatsOccupied = document.getElementsByClassName("seat selected");
        for(var i =0, il = seatsOccupied.length;i<il;i++){
          seatsOccupied[i].className += "colored";
       }
      }
    }
    
  else if(slectedMovie == 12){

    var token = setInterval(timer, 1000); 
    var area = document.getElementById("test");
    var i = 10;
    function timer() {
    
        if (i <= 0) {
            clearInterval(token);
            changeStyle(); // Stop counting down.
        } else {
            i -= 1; // Countdown.
            area.innerHTML = i;
        }
    
    };
    function changeStyle(){
      let screen = document.getElementById("screen");
      screen.style.backgroundImage = "url(./joker.gif)";

      let movie = document.getElementById("movie");
      movie.style.background = "green";
      movie.style.color = "white";
      let button = document.getElementById("bestellung");
      button.style.color = "white";
      button.style.background = "green";
      
    }
  }
  else if(slectedMovie == 8){

    var token = setInterval(timer, 1000); 
    var area = document.getElementById("test");
    var i = 10;
    function timer() {
    
        if (i <= 0) {
            clearInterval(token);
            changeStyle(); // Stop counting down.
        } else {
            i -= 1; // Countdown.
            area.innerHTML = i;
        }
    
    };
    function changeStyle(){
      let screen = document.getElementById("screen");
      screen.style.backgroundImage = "url(./ts4.gif)";

      let movie = document.getElementById("movie");
      movie.style.background = "red";
      movie.style.color = "white";
      let button = document.getElementById("bestellung");
      button.style.color = "white";
      button.style.background = "red";
      
    }

  }
  else if(slectedMovie == 9){

    var token = setInterval(timer, 1000); 
    var area = document.getElementById("test");
    var i = 10;
    function timer() {
    
        if (i <= 0) {
            clearInterval(token);
            changeStyle(); // Stop counting down.
        } else {
            i -= 1; // Countdown.
            area.innerHTML = i;
        }
    
    };
      function changeStyle(){
        let screen = document.getElementById("screen");
        screen.style.backgroundImage = "url(./lion.gif)";

        let movie = document.getElementById("movie");
        movie.style.background = "orange";
        movie.style.color = "black";
        let button = document.getElementById("bestellung");
        button.style.color = "black";
        button.style.background = "orange";
      }
    
  }
  else{
      console.log("No movie selected");
  }
 }

 $(document).ready(function(){
  $(".bestellung").click(function(){
      $(".test").toggleClass("show");
    })
})

function validator(){
    document.getElementById("bestellung").disabled = true;
    document.getElementById("ajaxArea").innerHTML += '<button id="gamebutton">Klick me for a chance to get 50% off</button>';
    document.getElementById("img1").style.backgroundImage = "url(./dog.gif)";
    document.getElementById("img2").style.backgroundImage = "url(./crazy.gif)";
    var cube = document.getElementById("gamebutton");
    cube.style.textAlign = "center";
    cube.style.background = "cyan";
    cube.style.borderRadius = "5px";
    cube.addEventListener('click', winOrNot);
    
    var clicked = 0;

    function winOrNot(){
      if(clicked < 1){
      clicked++
      var numberRow = new Array;
      numberRow[0] = 1;
      numberRow[1] = 2;
      numberRow[2] = 3;
      numberRow[3] = 4;
      numberRow[4] = 5;
      numberRow[5] = 6;
      
      var i = Math.floor(Math.random() * 6) + 1;

      console.log(numberRow);

     var chanceToWin = new Promise(
      function (resolve, reject){
        if(numberRow[i] > 4){
          document.getElementById("ajaxArea").innerHTML += '<h4>' + numberRow[i] + '</h4>';
          var won = alert("Congratulation. You've won. Look at the Price. It's now 50% off.");
          //Rechnung hinzufügen
          console.log("The number is: " + numberRow[i]);
          
          resolve(won);
        }

        else{
          document.getElementById("ajaxArea").innerHTML += '<h4>' + numberRow[i] + '</h4>';
          var won = alert("Sorry You've lost");
          console.log("The number is: " + numberRow[i])
          reject(reason);
        }
      }
    )

    var runGame = function(){
      chanceToWin.then(function(fulfilled){
        alert(fulfilled)
      })
      .catch(function(error){
        alert(error.message);
      })
    }
    runGame();
    }
    document.getElementById("gamebutton").disabled = true;
  }
}



