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
    "Thauvin + Ferguson"
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
