import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularLearnApp');
  name = "kapil shamra";
  age = 27;

  getName() {
    return this.name;
  }

  getValue(a: number, b: number, c: number) {
    //need to define  datatype of a,b,c as this is typescript and it is a statically typed language
    return a + b + c;
  }
}
