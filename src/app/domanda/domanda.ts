import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-domanda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './domanda.html',
  styleUrl: './domanda.css'
})
export class Domanda {
 scelta = -1;
 punteggio = 0;

 @Input() domanda!: { question: string; options: Array<string>; answer:Number };
 @Output() datiRisposta = new EventEmitter<number>();

 inviaRisposta(){
  this.datiRisposta.emit(this.scelta);
 }

 

 
}
   
