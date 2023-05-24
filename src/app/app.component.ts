import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaarticulos';

  productos = [
    {
      producto: "Iphone 13",
      color: "gris",
      precio: 3000000,
      camaras: 2,
      pantalla: "2k"
    },
    {
      producto: "Samsung s22",
      color: "verde",
      precio: 2500000,
      camaras: 3,
      pantalla: "Oled FullHd"
    },
    {
      producto: "Poco F3",
      color: "blanco perla",
      precio: 1500000,
      camaras: 3,
      pantalla: "FullHd"
    }
  ]
}
