// script.js
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("colorButton");
  const box = document.querySelector(".box");

  button.addEventListener("click", function () {
    // Cambia il colore di sfondo del box quando il bottone è cliccato
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
  });

  // Funzione per generare un colore casuale
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
