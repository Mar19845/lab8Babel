import '../Css/FM.scss';
import FMpic from "../Imagenes/FM.jpg";

const body = document.body;
const br = document.createElement('br');
const h1 = document.createElement('h1');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const p = document.createElement('p');
const p2 = document.createElement('p');

const ul1 = document.createElement('ul');
const ul2 = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const img = document.createElement('img');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');
const aRegreso = document.createElement('a');

a1.href="https://www.footballmanager.com/es";
a1.target="_blank";
a1.innerHTML="Football Manager";
p.innerHTML="El "; 
p2.innerHTML=" es el simulador mas completo de futbol que existe, ya que te permite controlar"
+"todo respecto al manejo de un club, desde negociar el contrato de tu jugador estrella hasta el contrato"
+"del preparador fisico. Al contar con una base de datos sumamente extensa y una comunidad que aporta mucho"
+"mucho mas para crear una expericia de juego real.";
a2.href="https://www.fmsite.net";
a2.innerHTML="Comunidad Football Manager";
a2.target="_blank";
a3.href="https://youtu.be/mLvWuE2ADsE";
a3.innerHTML="Video que Explica que es Football Manager";
a3.target="_blank";
li1.appendChild(a2);
li2.appendChild(a3);
ul1.appendChild(li1);
ul1.appendChild(li2);
div2.appendChild(p);
div2.appendChild(a1);
div2.appendChild(p2);
div2.appendChild(br);
div2.appendChild(ul1);
aRegreso.href="index.html";
aRegreso.innerHTML="Regresar al Inicio";
li3.appendChild(aRegreso);
ul2.appendChild(li3);
div3.appendChild(ul2);

h1.innerText="QUE ES EL FOOTBALL MANAGER???";
img.src=FMpic;
//img.src="../Imagenes/FM.jpg";
img.alt="Logo Football Manager";
div1.appendChild(img);

body.appendChild(h1);
body.appendChild(br);
body.appendChild(div1);
body.appendChild(br);
body.appendChild(div1);
body.appendChild(br);
body.appendChild(div2);
body.appendChild(br);
body.appendChild(div3);