🖥 HTML - Comandi di base
Strutturazione di una pagina HTML
html
Copia
Modifica

<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il titolo della pagina</title>
  </head>
  <body>
    <!-- Contenuti della pagina -->
  </body>
</html>
Creazione di elementi di contenuto
Intestazione:

html
Copia
Modifica

<h1>Titolo principale</h1>
<h2>Sottotitolo</h2>
Paragrafo:

html
Copia
Modifica

<p>Questo è un paragrafo di testo.</p>
Immagine:

html
Copia
Modifica
<img src="percorso/immagine.jpg" alt="Descrizione immagine">
Link:

html
Copia
Modifica
<a href="https://www.esempio.com">Visita il sito</a>
Form
Campo di input:

html
Copia
Modifica
<input type="text" placeholder="Inserisci il tuo nome">
Bottone:

html
Copia
Modifica
<button>Clicca qui</button>
Elementi semantici
html
Copia
Modifica

<header>
  <nav>Menu di navigazione</nav>
</header>
<main>
  <section>
    <h2>Sezione principale</h2>
    <p>Contenuto della sezione</p>
  </section>
</main>
<footer>
  <p>Footer del sito</p>
</footer>
🎨 CSS - Selettori e Proprietà
Selettori base
Selettore universale:

css
Copia
Modifica

- {
  margin: 0;
  padding: 0;
  }
  Selettore per tag:

css
Copia
Modifica
h1 {
font-size: 2em;
}
Selettore per classi:

css
Copia
Modifica
.container {
width: 100%;
margin: 0 auto;
}
Selettore per ID:

css
Copia
Modifica
#header {
background-color: blue;
}
Layout e box model
Modifica larghezza e altezza:

css
Copia
Modifica
.container {
width: 100%;
height: 500px;
}
Padding e margini:

css
Copia
Modifica
p {
padding: 20px;
margin: 10px;
}
Colori e font
Colore del testo:

css
Copia
Modifica
h1 {
color: #333;
}
Font personalizzati:

css
Copia
Modifica
body {
font-family: 'Arial', sans-serif;
}
Flexbox e Grid
Flexbox:

css
Copia
Modifica
.container {
display: flex;
justify-content: space-between;
align-items: center;
}
Grid:

css
Copia
Modifica
.grid-container {
display: grid;
grid-template-columns: repeat(3, 1fr);
}
⚡ JavaScript - Manipolazione del DOM e Eventi
Accesso agli elementi
Selezionare un elemento:

javascript
Copia
Modifica
const header = document.querySelector('header');
Modificare il contenuto di un elemento:

javascript
Copia
Modifica
header.textContent = 'Nuovo Titolo';
Eventi
Aggiungere un evento a un bottone:

javascript
Copia
Modifica
const button = document.querySelector('button');
button.addEventListener('click', function() {
alert('Hai cliccato il bottone!');
});
Funzioni
Dichiarazione di una funzione:

javascript
Copia
Modifica
function saluta() {
console.log('Ciao!');
}
Funzione con parametro:

javascript
Copia
Modifica
function saluta(nome) {
console.log('Ciao, ' + nome + '!');
}
saluta('Santino');
Manipolazione degli stili
Modificare lo stile di un elemento:

javascript
Copia
Modifica
const box = document.querySelector('.box');
box.style.backgroundColor = 'red';
🛠 TypeScript - Tipi e Sintassi
Dichiarazione di variabili
Tipi di variabili:

typescript
Copia
Modifica
let nome: string = 'Santino';
let eta: number = 25;
let attivo: boolean = true;
Funzioni
Funzione con tipo di ritorno:

typescript
Copia
Modifica
function somma(a: number, b: number): number {
return a + b;
}
Funzione opzionale con parametro:

typescript
Copia
Modifica
function saluta(nome: string, saluto?: string): void {
console.log(`${saluto ? saluto : 'Ciao'}, ${nome}`);
}
saluta('Santino');
Classi
Creazione di una classe:

typescript
Copia
Modifica
class Persona {
nome: string;
eta: number;

constructor(nome: string, eta: number) {
this.nome = nome;
this.eta = eta;
}

saluta(): void {
console.log(`Ciao, sono ${this.nome} e ho ${this.eta} anni.`);
}
}
🧩 Angular - Sintassi e Direttive
Direttive di Struttura
\*ngIf:

html
Copia
Modifica

<div *ngIf="isVisible">Questo div è visibile se isVisible è true</div>
*ngFor:

html
Copia
Modifica

<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
Binding
Binding bidirezionale:

html
Copia
Modifica
<input [(ngModel)]="nome">
Binding unidirezionale (property binding):

html
Copia
Modifica
<img [src]="imageUrl" alt="Immagine dinamica">
Event binding:

html
Copia
Modifica
<button (click)="onClick()">Clicca</button>
Componente
Definizione di un componente:

typescript
Copia
Modifica
import { Component } from '@angular/core';

@Component({
selector: 'app-mio-componente',
template: '<h1>{{ titolo }}</h1>',
styleUrls: ['./mio-componente.component.css']
})
export class MioComponente {
titolo: string = 'Benvenuto!';
}
🔄 Git - Gestione versioni
Aggiungere, commettere e caricare file su GitHub
Aggiungi i file:

bash
Copia
Modifica
git add .
Fai il commit:

bash
Copia
Modifica
git commit -m "Descrizione del cambiamento"
Carica su GitHub:

bash
Copia
Modifica
git push origin main
