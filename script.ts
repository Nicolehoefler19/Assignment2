import { realpathSync } from "fs";

const container = document.querySelector('.container') as HTMLInputElement;
const seats = document.querySelectorAll('.row .seat:not(.occupied)') as  NodeListOf<HTMLElement>;
const count : HTMLElement | any = document.getElementById('count');
const total : HTMLElement | any = document.getElementById('total');
const movieSelect = document.getElementById('movie') as HTMLInputElement;
var localStorage : Storage;


populateUI();

var ticketPrice: number;
ticketPrice = +movieSelect.value;

//Save selected movie index and price
function setMovieData(movieIndex: string, moviePrice: string){ //warum error
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected') as NodeListOf<HTMLElement>;
    // Kake const seatsIndex;
    const seatsIndex : any = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount : number = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount;
}

//Get Data from Localstorage and populate UI
function populateUI() {
    
    const selectedSeats: number[] | null = JSON.parse(localStorage.getItem('selectedSeats') || '{}');

    if (selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat: Element, index: number) => {
            if (selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex : string | null = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
      }
}

//Movie select event

container?.addEventListener('change', (e: Event<HTMLElement>) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});
//Seat Click event
container?.addEventListener('click', (e: MouseEvent) => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
      ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
      }
    });
    
    // Initial count and total set
    updateSelectedCount();