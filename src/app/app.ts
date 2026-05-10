import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularLearnApp');
  
  count: WritableSignal<number> = signal(0);

  operation(param: string) {
    if (param === 'add') {
      this.count.update(value => value + 1);
    } else if (param === 'subtract') {
      this.count.update(value => value - 1);
      if(this.count() < 0) {
        this.count.set(0);
        alert('Count cannot be negative, resetting to 0. Please try increment opearation instead.');
      }
    } else if (param === 'reset') {
      this.count.set(0);
    } else {
      console.log('Invalid operation');
    }
  }
}
