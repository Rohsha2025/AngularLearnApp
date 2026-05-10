import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
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
  ageSig = signal(27);

  //example of computed signal
  height:WritableSignal<number> = signal(180); // wrtitable signal is datatype of signal
  width:WritableSignal<number> = signal(80); // number is the datatype of value stored in signal
  area = computed(() => this.height() * this.width());
  //we can't use directly this.height() * this.width() to set the value of area signal, 
  //because it will not be reactive.

  data:WritableSignal<string> = signal("initial value");


  constructor() {
    effect(() => {
      console.log("effect called");
      console.log(this.ageSig());
      if(this.ageSig() > 30) {
        console.log("age is greater than 30");
        this.ageSig.set(this.ageSig() - 10);
      }
      //this is how we set up an effect to listen to changes in the ageSig signal.
      //  Whenever the ageSig signal changes, the effect will be re-run and 
      // we can perform some logic based on the new value of the signal. 
      // In this case, we check if the age is greater than 30, and if it is, we subtract 10 from the age. 
      // This demonstrates how we can use signals and effects to manage state and side effects in an Angular application.
    });

    effect(() => {
      console.log("effect called, height is incremented by 10 : " + this.height());
      console.log(this.area());

    });
  }

  updateAge() {
    this.ageSig.update(age => age + 1);
    //this.ageSig.set(this.ageSig() + 1); --> we can also use set method to update the signal value, 
    // but update method is more convenient as it provides the current value of the signal as an argument, 
    // so we don't have to call the signal function to get the current value.
  }

  updateAgeProp() {
    this.age++;
    if(this.age > 30) {
      this.age = this.age - 10;
    }
  }

  updateHeight(){
    this.height.update(height => height + 10);
  }
}
