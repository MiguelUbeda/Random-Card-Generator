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

  console.log(palo);
  boton.addEventListener("click", () => {
    //Cambiarlo por for OF (NO FUNCIONABA)
    for (let i = 0; i < palo.length; i++) {
      palo[i].removeAttribute("class"); //NO REMUEVE, NO FUNCIONA
      palo[i].classList.add("fa-solid", palosArray[randomPalos]);
    }
    texto.innerHTML = randomNumber;
    console.log(randomNumber);
    //SIEMPRE SALE EL MISMO NÚMERO
  });
};
