import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola mundo desde componente</h1>
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy()">+1</button>
  <button (click)="resetCounter(10)" value="">RESET</button>
  <button (click)="decreaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  public counter:number = 10;


  increaseBy():void{
    this.counter += 1;
  }

  decreaseBy(value:number):void{
    this.counter += value;
  }

  resetCounter(value:number):void{
    this.counter = value;
  }
}


