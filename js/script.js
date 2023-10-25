// dati: array di 5 immagini
// logica: ogni immagine deve essere riprodotta in html tramite ciclo for:
// 

// (indicizzazione circolare : iterare array loop, l'indice torna al principio quando raggiunge la fine. Si usa il % per fare in modo che l'indice rimanga entro il range dell'array
// si parte da un indice (es currentIndex), poi si incrementa currentIndex + 1; poi si fa in modo che l'indice stia entro il range di indici dell'array ( 0 to `array.length - 1`) si usa il % => (currentIndex + 1) % array.length [questo calcola il resto qudno currentInde+1 è diviso per array.length] )===> quindi se currentIdex+1 eccede lunghezza array, il risultato torna a zero 
// ________________________________
// sintassi documentazione: 
// const array = [1, 2, 3, 4, 5];
// let currentIndex = 2;

// // Move to the next element
// currentIndex = (currentIndex + 1) % array.length;
// console.log(array[currentIndex]); // Outputs: 3

// // If you keep moving, it wraps around to the beginning
// currentIndex = (currentIndex + 1) % array.length;
// console.log(array[currentIndex]); // Outputs: 4
// _______________________________________

// array

const myImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// container html e contenuto 
const itemSlider = document.querySelector('.items');
let itemContent = '';
let slideIndex = 0;

// funzione con loop per generare html 
function updateSlider() {
    itemContent = '';
    for (let i = 0; i < myImages.length; i++) {
        const isVisible = i === slideIndex ? 'active' : '';
        // operatore ternario --> condition (espressione booleana vera o falsa) ? expressionIfTrue;(valore se espressione vera) : expressionIfFalse (valore o condizione se espressione falsa)
        // si può scrivere con if esle 
        // let isVisible;
        // if (i === slideIndex) {
        //  isVisible = 'active';
        // } else {
        // isVisible = '';
        // }
        itemContent += `<div class="item ${isVisible}"><img src="./img/${myImages[i]}" alt=""></div>`;
    }
    itemSlider.innerHTML = itemContent;
}

// funzione con indicizzazione circolare
function showNextSlide() {
    slideIndex = (slideIndex + 1) % myImages.length;
    updateSlider();
}

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + myImages.length) % myImages.length;
    updateSlider();
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        showNextSlide();
    } else if (event.key === 'ArrowLeft') {
        showPreviousSlide();
    }
});


updateSlider();


setInterval(showNextSlide, 5000); 

// setInterval= eseguire ripetutamente una funzione o un pezzo di codice ad uno specifico intervallo di tempo.
// sintassi documentazione setInterval(callback, delay);--> callback = nome della funzione che vuoi esegiore, delay--> intervallo di tempo in millisecondi tra ogni esecuzione
// setInterval si può cancellare con clearInterval(intervalId). SetInterval si può usare per animazioni, prendere dati dai server ad intervalli regolari, slideshow



// VERSIONE NUMERO UNO
// // array di immagini
// const myImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// // container per  items
// const itemSlider = document.querySelector('.items');
// let itemContent = '';

// // loop tra le immagini per creare contenuto html
// for (let i = 0; i < myImages.length; i++) {
//     // determinare se l'immagine corrente è la prima visibile
//         const isVisible = i === 0 ? 'active' : '';

//         // contenuto html per ogni immagine
//         itemContent += `<div class="item ${isVisible}"><img src="./img/${myImages[i]}" alt=""></div>`;
// }

// // inserire contenuto html in container
// itemSlider.innerHTML = itemContent;


// const items = document.getElementsByClassName('item');
// let itemActive = 0;

// // keydown event listener
// document.addEventListener('keydown', function (event) {
//     if (event.key === 'ArrowRight') {

//         // rimuovere active da item corrente

//             items[itemActive].classList.remove('active');

//         // da item attivo a --> prossimo e mettere active sul nuovo item attivo

//             itemActive = (itemActive + 1) % myImages.length;

//             items[itemActive].classList.add('active');

//     } else if (event.key === 'ArrowLeft') {

//             items[itemActive].classList.remove('active');
            
//             itemActive = (itemActive - 1 + myImages.length) % myImages.length;

//             items[itemActive].classList.add('active');
//     }
// });