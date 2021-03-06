import BarrowPic from '../Imagenes/Barrow.png';
import '../Css/Barrow.scss';
import "core-js/stable";

const body = document.body;
const br = document.createElement('br');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');

const ul1 = document.createElement('ul');
const ul2 = document.createElement('ul');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const liRegreso = document.createElement('li');
const img = document.createElement('img');

const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');
const aRegreso = document.createElement('a');

const h1 = document.createElement('h1');
const h3 = document.createElement('h3');

h1.innerHTML="EL BARROW AFC Y SU HISTORIA";
h3.innerHTML="Redes Oficiales del Barrow";

const p = document.createElement('p');

p.innerHTML=" El Barrow AFC es un equipo de la 4ta division inglesa, es el equipo de la ciudad Barrow-in-Furness, Cumbria"
+"y juega en el estadio Holker Street. El club fundado en 1905 ha pasado casi toda su vida jugando entre la 4ta y 5ta "
+"division inglesa. Para esta temporada lograron el ascenso a la 4ta division despues de 50 años.";

a1.href="https://www.barrowafc.com";
a1.target="_blank";

a2.href="https://twitter.com/barrowafc?lang=es";
a2.target="_blank";

a3.href="https://www.instagram.com/barrowafc/?hl=es-la";
a3.target="_blank";

a1.innerHTML="Pagina Web";
a2.innerHTML="Twitter";
a3.innerHTML="Instagram";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);

ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);

div2.appendChild(p);
div2.appendChild(br);
div2.appendChild(h3);
div2.appendChild(br);
div2.appendChild(ul1);

img.src=BarrowPic;;
//img.src="../Imagenes/Barrow.png";
img.alt="Escudo del Barrow Fc";
div1.appendChild(h1);
div1.appendChild(img);


aRegreso.innerHTML="Regreso al Inicio";
aRegreso.href="index.html";

liRegreso.appendChild(aRegreso);
ul2.appendChild(liRegreso);
div3.appendChild(ul2);

//body.appendChild(h1);
body.appendChild(div1);
body.appendChild(div2);
body.appendChild(br);
body.appendChild(div3);