import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  translateYValue: string = '0px';

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateTranslateY();
  }

  constructor() {
    // Llama a la función una vez para establecer el valor inicial
    this.updateTranslateY();
  }

  updateTranslateY() {
    const windowWidth = window.innerWidth;
    // Aquí puedes definir la lógica para ajustar el translateY en función del tamaño de la ventana
    // Por ejemplo, podrías calcular una proporción entre el tamaño actual y el tamaño máximo, y ajustar translateY en consecuencia
    const maxScreenWidth = 1879; // Por ejemplo, el ancho máximo en el que quieres que se inicie la transformación
    const minScreenWidth = 500;
    const translateYAmount = ((windowWidth <= maxScreenWidth) && (windowWidth >= minScreenWidth) ) ? -((maxScreenWidth - windowWidth) / 80) + 'px' : '0px'; // 76.8 es una escala arbitraria para ajustar la velocidad de la transformación

    this.translateYValue = translateYAmount;
  }
}
