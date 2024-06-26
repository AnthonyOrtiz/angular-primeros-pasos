import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Iroman';
  public age:number = 45;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescriptin():string{
    return `${this.name} - ${this.age}`;
  }

  public changeName(newName:string):void{
    this.name = newName;

    // throw 'Metodo no implementado'
  }

  public changeAge(newAge:number):void{
    this.age = newAge;
  }

  public resetHeroe():void{
    this.age = 45;
    this.name = 'Iroman';
  }
}
