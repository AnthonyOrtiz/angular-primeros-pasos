import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  public onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  public onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
  }
}
