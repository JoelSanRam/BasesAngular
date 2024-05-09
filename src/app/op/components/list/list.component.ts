import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() characterList: character[] = [
    {
      name: 'Zoro',
      power: 'Santoryu'
    },
  ]

  @Output() onDelteCharacterByID: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(i?: string):void {
    if(!i) return;
    this.onDelteCharacterByID.emit(i)
  }

}
