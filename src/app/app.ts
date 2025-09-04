import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz } from './quiz/quiz';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Quiz],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quiz-angular');

}
