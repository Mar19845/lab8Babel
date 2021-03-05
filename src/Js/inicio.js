//import "inicio.css";
import '../Css/inicio.scss';
const body = document.body;
////////////////////////////////
const divTitulo = document.createElement('div');
const divLista= document.createElement('div');
const footer = document.createElement('footer');
const br = document.createElement("br");

//crear el titulo y el mensaje y luego hacer un append al div
const h1 = document.createElement('h1');
const parrafo = document.createElement('p');
h1.innerHTML = 'Como Salve Al Barrow del Descenso en el Football Manager';
divTitulo.appendChild(h1);
divTitulo.appendChild(parrafo);
//
const ul = document.createElement("ul");
const BarrowLi = document.createElement("li");
const fmLi = document.createElement("li");
const HistoriaLi = document.createElement("li");

const BarrowA = document.createElement("a");
const fmA = document.createElement("a");
const HistoriaA = document.createElement("a");
//
BarrowA.innerHTML = "Barrow Fc";
BarrowA.href="Barrow.html";
fmA.innerHTML="Football Manager";
fmA.href="Fm.html";
HistoriaA.innerHTML="Historia";
HistoriaA.href="Historia.html";
//
BarrowLi.appendChild(BarrowA);
fmLi.appendChild(fmA);
HistoriaLi.appendChild(HistoriaA);
ul.appendChild(BarrowLi);
ul.appendChild(HistoriaLi);
ul.appendChild(fmLi);
divLista.appendChild(ul);
//
const b = document.createElement("b");
b.innerHTML="Mis Redes";
const redes = document.createElement("a");
redes.href="https://www.instagram.com/jmmarro1025/";
redes.target="_blank";
redes.innerHTML="Instagram";

footer.appendChild(b);
footer.appendChild(br);
footer.appendChild(redes);

body.appendChild(divTitulo);
body.appendChild(divLista);
body.appendChild(footer);