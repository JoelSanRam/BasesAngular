import { Component } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { OpService } from '../services/op.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(
    private opService: OpService
  ){}

  get characters(): character[]{
    return [...this.opService.characterList]
  }

  onDeleteCharacter(id: string){
    this.opService.onDeleteCharacter(id)
  }

  onAddCharacter(character: character):void{
    this.opService.addCharacter(character)
  }

}
