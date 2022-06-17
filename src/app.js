/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  const heart = "fa-heart";
  const spade = "fa-sun";
  const club = "fa-moon";
  const diamonds = "fa-bycicle";
  let palosArray = [heart, spade, club, diamonds];

  let palo = document.querySelectorAll("i");
  let texto = document.querySelector("p");
  let boton = document.querySelector("button");

  boton.addEventListener("click", () => {
    let randomPalos = Math.floor(Math.random() * 3);
    for (let i of palo) {
      i.classList.remove(i.classList[i.classList.length - 1]);
      i.classList.add(palosArray[randomPalos]);
    }
    let randomNumber = Math.floor(Math.random() * 12);
    texto.innerHTML = randomNumber;
  });
};
