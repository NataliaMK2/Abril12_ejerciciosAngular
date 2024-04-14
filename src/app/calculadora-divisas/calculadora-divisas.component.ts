import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-divisas',
  templateUrl: './calculadora-divisas.component.html',
  styleUrls: ['./calculadora-divisas.component.css']
})
export class CalculadoraDivisasComponent {
  public cantidad: number = 0;
  public tipoMoneda: string = 'Euro';
  public resultado: number = 0;

  calcular(): void {
    switch (this.tipoMoneda) {
      case 'Euro':
        this.resultado = this.cantidad * 0.91; 
        break;
      case 'Libra':
        this.resultado = this.cantidad * 1.37; 
        break;
      case 'Dolares':
        this.resultado = this.cantidad;
        break;
      default:
        this.resultado = NaN; 
    }
  }
}
