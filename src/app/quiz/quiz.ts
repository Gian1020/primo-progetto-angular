import { Component } from '@angular/core';
import { Domanda } from '../domanda/domanda';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [Domanda],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {
  quizQuestions = [
  {
    question: 'Qual è la capitale d’Italia?',
    options: ['Milano', 'Roma', 'Napoli', 'Torino'],
    answer: 1
  },
  {
    question: 'Qual è il colore del cielo in una giornata serena?',
    options: ['Verde', 'Blu', 'Rosso', 'Giallo'],
    answer: 1
  },
  {
    question: 'Quanti giorni ha un anno bisestile?',
    options: ['365', '366', '364', '360'],
    answer: 1
  },
  {
    question: 'Quale animale è noto per la sua lentezza?',
    options: ['Tartaruga', 'Leone', 'Canguro', 'Falco'],
    answer: 0
  },
  {
    question: 'Quale pianeta è conosciuto come il Pianeta Rosso?',
    options: ['Venere', 'Marte', 'Giove', 'Saturno'],
    answer: 1
  },
  {
    question: 'Qual è il simbolo chimico dell’acqua?',
    options: ['H2O', 'O2', 'CO2', 'NaCl'],
    answer: 0
  },
  {
    question: 'Chi ha dipinto la Mona Lisa?',
    options: ['Michelangelo', 'Leonardo da Vinci', 'Raffaello', 'Caravaggio'],
    answer: 1
  },
  {
    question: 'Quale lingua si parla principalmente in Brasile?',
    options: ['Spagnolo', 'Portoghese', 'Inglese', 'Francese'],
    answer: 1
  },
  {
    question: 'Qual è la valuta degli Stati Uniti?',
    options: ['Euro', 'Sterlina', 'Dollaro', 'Yen'],
    answer: 2
  },
  {
    question: 'Quale strumento musicale ha 88 tasti?',
    options: ['Chitarra', 'Pianoforte', 'Violino', 'Flauto'],
    answer: 1
  }
];
 i:number=0;

 gestisciRisposta(evento: boolean){
  if(evento){
    this.i++;
  }
 }


}
