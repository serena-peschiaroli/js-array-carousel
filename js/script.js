// dati: array di 5 immagini
// logica: ogni immagine deve essere riprodotta in html tramite ciclo for:
// 

// array di immagini
const myImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// container per  items
const itemSlider = document.querySelector('.items');
let itemContent = '';

// loop tra le immagini per creare contenuto html
for (let i = 0; i < myImages.length; i++) {
    // determinare se l'immagine corrente è la prima visibile
        const isVisible = i === 0 ? 'active' : '';

        // contenuto html per ogni immagine
        itemContent += `<div class="item ${isVisible}"><img src="./img/${myImages[i]}" alt=""></div>`;
}

// inserire contenuto html in container
itemSlider.innerHTML = itemContent;


const items = document.getElementsByClassName('item');
let itemActive = 0;

// keydown event listener
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {

        // rimuovere active da item corrente

            items[itemActive].classList.remove('active');

        // da item attivo a --> prossimo e mettere active sul nuovo item attivo

            itemActive = (itemActive + 1) % myImages.length;

            items[itemActive].classList.add('active');

    } else if (event.key === 'ArrowLeft') {

            items[itemActive].classList.remove('active');
            
            itemActive = (itemActive - 1 + myImages.length) % myImages.length;
            
            items[itemActive].classList.add('active');
    }
});