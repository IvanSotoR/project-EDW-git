// alert ("¡Bienvenido estimado cliente!")
const sliderContainer = document.querySelector('.contenedorslider');
const imgBanner = document.querySelector('.imgslider');
const imagenes = [
   './img/Slider.jpg', 
   './img/Slider1.jpg',
   './img/membresia.png',//hay que agregar otras imagenes
];
let indiceImagenes = 0;
let autoSlideInterval;
//Creacion de los botones y su contenedor
const buttonContainer = document.createElement('div');
buttonContainer.style.cssText = `
    display: flex;
    position: absolute;
    width: 850px     
`;
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');
prevButton.textContent = '<';
nextButton.textContent = '>';
prevButton.style.cssText = `
    padding: 10px;
    opacity: 40%;
    color: white;
    font-size: 25px;   
`;
nextButton.style.cssText = `
    padding: 10px;
    opacity: 40%;
    color: white;
    font-size: 25px;
    margin-left: 775px;   
`;
nextButton.addEventListener('click', () => {
    cambiarImagen(true);
    resetAutoSlide();
});
prevButton.addEventListener('click', () => {
    cambiarImagen(false);
    resetAutoSlide();
});
//Creacion de puntos y su contenedor
const puntosContainer = document.createElement('div');
puntosContainer.style.cssText = `
    display: flex;
    margin-top: 400px;
    margin-left: 400px;
    position: absolute;  
`;
function generarPuntos() {
    puntosContainer.innerHTML = '';
    imagenes.forEach((_, index) => {
    const punto = document.createElement('span');
    punto.style.cssText = `
    width: 12px;
    height: 12px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${index === indiceImagenes ? 'green' : 'gray'};
    display: inline-block;
    cursor: pointer;
    `;
    punto.addEventListener('click', () => {
    indiceImagenes = index;
    imgBanner.src = imagenes[indiceImagenes];
    resetAutoSlide();
    generarPuntos();
    });
    puntosContainer.appendChild(punto);
    });
}
//Cambio de Imagen
const cambiarImagen = (next = true) => {
    indiceImagenes = (indiceImagenes + (next ? 1 : -1) + imagenes.length) % imagenes.length;
    imgBanner.src = imagenes[indiceImagenes];
    generarPuntos();
};
const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => cambiarImagen(true), 2000);
}
buttonContainer.appendChild(prevButton);
buttonContainer.appendChild(nextButton);
sliderContainer.appendChild(buttonContainer);
sliderContainer.appendChild(puntosContainer);
generarPuntos();
resetAutoSlide();