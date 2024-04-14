import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-aritmetica',
  templateUrl: './calculadora-aritmetica.component.html',
  styleUrls: ['./calculadora-aritmetica.component.css']
})
export class CalculadoraAritmeticaComponent {
  public num1: number = 0;
  public num2: number = 0;
  public resultado: number = 0;

  sumar(): void {
    this.resultado = this.num1 + this.num2;
  }

  restar(): void {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar(): void {
    this.resultado = this.num1 * this.num2;
  }

  dividir(): void {
    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
    } else {
      this.resultado = NaN;
    }
  }
}