import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-domanda',
  imports: [],
  templateUrl: './domanda.html',
  styleUrl: './domanda.css'
})
export class Domanda {
 @Input() domanda!: { question: string; options: Array<string>; answer:Number };
 
}
   
