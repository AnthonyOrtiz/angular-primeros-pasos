import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames:string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  public deleteHeroe?:string = '';

  public removeLastHeroe():void{
    this.deleteHeroe = this.heroeNames.pop();

  }
}
