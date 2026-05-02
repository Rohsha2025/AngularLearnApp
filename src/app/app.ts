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

  //if specifically want to give string
  data:string = "example";

  //if give two datatypes to a variable then it is called union type
  example_1:string | number = "example"; // this means data can be either a string or a number 

  //but it is very difficult to manage like there is more number of datatypes then it will be very difficult to
  //  manage so we can use any datatype but it is not recommended as it will defeat the purpose of using typescript
  example_2:any = "example"; // this means data can be of any type but it is not recommended as it will defeat the 
  // purpose of using typescript

  getName() {
    return this.name;
  }

  getData() {
    //this.data = 21; 
    // This will cause a type error because 'data' is defined as a string, but we are trying to assign a number to it.
    return this.data;
  }

  getexample_1() {
    this.example_1 = 21;
    return this.example_1;
  }

  getValue(a: number, b: number, c: number) {
    //need to define  datatype of a,b,c as this is typescript and it is a statically typed language
    return a + b + c;
  }
}
