import { Component } from '@angular/core';

interface Hero {
  name: string;
  anime: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  eliminado:Hero = { name: '', anime: '' }
  validationDelete:boolean = false

  heroes:Hero[] = [
    { name: 'Luffy', anime: 'One piece'},
    { name: 'Senku', anime: 'Dr. Stone' },
    { name: 'Asta', anime: 'Black Clover' },
    { name: 'Kazuma', anime: 'Konosuba' }
  ]

  eliminar(): void {
    if (this.heroes.length > 0) {
      this.eliminado = this.heroes.pop()!;
      this.validationDelete = true
    } else {
      console.log('No hay más héroes para eliminar');
      // Opcionalmente, puedes definir un valor por defecto o manejar este caso de alguna otra manera.
      this.eliminado = { name: '', anime: '' }; // Restablecer a un valor por defecto si es necesario.
    }
  }

  reset():void{
    this.heroes= [
      { name: 'Luffy', anime: 'One piece'},
      { name: 'Senku', anime: 'Dr. Stone' },
      { name: 'Asta', anime: 'Black Clover' },
      { name: 'Kazuma', anime: 'Konosuba' }
    ]
    this.validationDelete = false
  }

}
