import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public id:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  public onDeleteCharacter(id?:string):void{
    //TODO: Emitir el ID del personaje
    if (!id) return;
    this.id.emit(id);
  }
}
