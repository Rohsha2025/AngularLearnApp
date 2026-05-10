import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularLearnApp');

  name:WritableSignal<string> = signal('');
  processedName: WritableSignal<string> = signal('');

  setValue(value:string){
    this.name.set(value);
  }

  resetValue(){
    this.name.set('AngularLearnApp');
  }

  uppercaseName() {
    const upper = this.name().trim().toUpperCase();
    this.name.set(upper);
    this.processedName.set(upper);
  }

  addGreeting() {
    const greeting = `Hello, ${this.name()}`;
    this.name.set(greeting);
    this.processedName.set(greeting);
  }
}
