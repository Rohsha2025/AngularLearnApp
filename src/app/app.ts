import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularLearnApp');
  name = "kapil shamra";
  age = 27;
  counter = 0;

  getName() {
    return this.name;
  }

  getValue(a: number, b: number, c: number) {
    //need to define  datatype of a,b,c as this is typescript and it is a statically typed language
    return a + b + c;
  }

  // we can also define the type of return value of a function in typescript
  getValueWithReturnType(a: number, b: number, c: number): number {
    return a + b + c;
  }

  //counterOps(action: string) {
  //  if (action === 'increment') {
  //    this.counter++;
//  } we can define function like this but it is not a 
// good practice as we can pass any string value to the function 
// and it will not work as expected
  counterOps(operation: 'increment' | 'decrement') {
    if (operation === 'increment') {
      this.counter++;
    } else {
      this.counter--;
    }
    alert("Counter: " + this.counter);
  }

}
