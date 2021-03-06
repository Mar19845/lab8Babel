import '../Css/Historia.scss';
import "core-js/stable";

const body = document.body;
const br = document.createElement('br');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const ul = document.createElement("ul");
const li = document.createElement("li");
const A = document.createElement("a");
const h1 = document.createElement("h1");
A.innerHTML = "Regresar Al Inicio";
A.href="index.html";
li.appendChild(A);
ul.appendChild(li);
div2.appendChild(ul);
p1.innerHTML="La historia empieza creando una partida y estando sin club, algo que el juego da oportunidad de empezar sin "
+"club. Luego de un un tiempo me llega una entrevista de trabajo, donde el equipo habia despedido al entrenador"
+"y necesitaban un tecnico para luchar dignamente por el descenso, el club ya se daba por descendido antes de diciembre"
+"y querian que luchara para armar un proyecto para volver a ascender al año siguiente. Sin embargo me propuse "
+"evitar el descenso.";
p2.innerHTML="Para eso utilice una formacion muy arriesgada con la cual en los primeros 10 partidos dio resultado logrando"
+"empates y victorias importantes contra rivales que estaban peleando el ascenso. Posteriormente tuve que cambiar"
+"ya que llegaron dos fichajes que nos dieron mas equilibro y ya tomamos una formacion mas equilibrada y tomamos"
+"una actitud de contra ataque. Despues de todo esto se logro salvar del descenso a falta de 6 fechas, por lo cual"
+"el club me renovo para la temporada siguiente, en la cual quieren que luche por terminar en la mitad de la tabla"
+"y que trabaja para mejorar la economia del club.";
h1.innerHTML="Asi empezo todo";
div1.appendChild(p1);
div1.appendChild(br);
div1.appendChild(p2);
body.appendChild(h1);
body.appendChild(div1);
body.appendChild(div2);