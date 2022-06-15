/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const heart = "fa-heart";
  const spade = "fa-sun";
  const club = "fa-moon";
  const diamonds = "fa-bycicle";
  let palosArray = [heart, spade, club, diamonds];
  let randomPalos = Math.floor(Math.random() * 3);
  let randomNumber = Math.floor(Math.random() * 12);
  let palo = document.querySelectorAll("i");
  let texto = document.querySelector("p");
  let boton = document.querySelector("button");

  boton.addEventListener("click", () => {
    for (let i = 0; i < palo.length; i++) {
      //HAY QUE REMOVER ANTES DE AÑADIR
      palo[i].classList.add("fa-solid", palosArray[randomPalos]);
    }
    //HAY QUE REMOVER ANTES DE AÑADIR
    texto.innerHTML = randomNumber;
  });
};
