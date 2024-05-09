import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  name: string = "Senku"
  age : number = 27

  get capitalizeName(): string{
    return this.name.toUpperCase()
  }

  heroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeData():void{
    this.name = "Araragi"
    this.age = 21
  }

  changeData2():void{
    this.name = "Luffy"
    this.age = 19
  }

  changeData3():void{
    this.name = "Senku"
    this.age = 27
  }

}
