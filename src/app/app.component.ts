import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto-frasi';
  // Lista di frasi
  frasi: string[] = [
    "Non vinco mai",
    "Hai già vinto",
    "Metto firma ieri",
    "Bolletta?",
    "Thauvin + Ferguson",
    "dove vuoi che vada",
    "sono meglio i miei",
    "non mi piace nessuno dei tuoi",
    "nel chill",
    "chaos portieri",
    "sei simil primo",
    "sei simil ultimo",
    "voglio arrivare ultimo",
    "voglio la coppetta",
    "disinstallo app",
    "smetto di seguire",
    "11 crediti è il 3% del budget",
    "non metto più la formazione",
    "rapina a mano armata",
    "furto con scasso",
    "bellanova per quarta",
    "strefezza per douglas luiz piango",
    "piango",
    "...e aggiungo",
    "ho già perso",
    "basta, forza cesena",
    "non potevo prevedere Butez al Como",
    "Bisognava diversificare",
    "posso dire ma vai a fare in culo?",
    "posso dire pareggio onesto?",
    "Ho già perso al venerdì sera",
    "Difendi meglio",
    "Attacca meglio",
    "Non me ne faccio niente",
    "Mi tocca mettere il 5-4-1",
    "Ho solo mio fratello Ademola...",
    "Stacco i dati",
    "Urlato",
    "è gigaenorme",
    "Astina?...",
    "Fai meglio l'asta",
    "Sempre quelli",
    "Meglio i miei",
    "Mi basta la cena pagata",
    "GOLDEN punticino",
    "uno lo dico...",
    "All'asta tanto ci sarà il gettone",
    "No durante l'asta si guarda il Milan",
    "Venerdì mattina da basso",
    "KASSSAAA",
    "Il basto, il bare, il tikus, il lauti..",
    "Sele...",
    "Oka...",
    "Oblack...",
    "Eusebio DEVE andare a premio",
    "Se non vai a premio, annata fallimentare",
    "Che banda",
    "Sto comunque meglio di altri",
    "Ore 7.10",
    "Apolide rinnegato retrocesso come la tua reputazione",
    "Posa il fiasco",
    "Gruppo morto?",
    "Oggi in ferie che non si scrive niente?",
    "Le mummie",
    "Ormai tonali è infermabile",
    "Ennesimo regalino?"
  ];

  // Frase da visualizzare
  frase: string = '';
  
  // Frasi non ancora mostrate
  frasiDisponibili: string[] = [...this.frasi]; // Copia iniziale dell'array

  // Funzione per generare una frase randomica
  generareFrase(): void {
    // Se ci sono frasi ancora disponibili
    if (this.frasiDisponibili.length > 0) {
      const indiceRandom = Math.floor(Math.random() * this.frasiDisponibili.length);
      this.frase = this.frasiDisponibili.splice(indiceRandom, 1)[0]; // Rimuove la frase dall'array delle frasi disponibili
    } else {
      // Se tutte le frasi sono state mostrate, rimescoliamo
      this.frasiDisponibili = [...this.frasi]; // Ritorniamo a tutte le frasi
      this.frasiDisponibili = this.shuffleArray(this.frasiDisponibili); // Rimescoliamo
      this.generareFrase(); // Chiamata ricorsiva per scegliere una nuova frase
    }
  }

  // Funzione per rimescolare un array
  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Scambia gli elementi
    }
    return array;
  }
}
