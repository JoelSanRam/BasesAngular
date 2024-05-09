import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  title = 'va de nuez';
  contador: number = 1

  incrementar(): void {
    this.contador += 1
  }

  decrementar(contar: number): void {
    contar -= 1
    this.contador = contar
  }

  reboot():void{
    this.contador = 1
  }

}
