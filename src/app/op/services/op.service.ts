import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class OpService {

  constructor() { }

  characterList: character[] = [
    {
      id: uuid(),
      name: 'Luffy',
      power: 'Gomu'
    },
    {
      id: uuid(),
      name: 'Sanji',
      power: 'Diable Jiamble'
    },
    {
      id: uuid(),
      name: 'Nami',
      power: 'Clima'
    }
  ]

  addCharacter(character: character):void {
    const newCharacter: character = { id: uuid(), ...character }
    this.characterList.push(newCharacter)
    console.log(this.characterList)
  }

  onDeleteCharacter(i: string){
    this.characterList = this.characterList.filter(character => character.id !== i)
    // this.characterList.splice(i,1)
  }

}
