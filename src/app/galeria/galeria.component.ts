import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [],
})
export class GaleriaComponent  implements OnInit {
  public titulo: string = 'Galería de imágenes';
  public descripcion: string = 'Pez Payaso';
  public imagen: string = 'assets/images/imagen1.jpg';

  constructor() { }

  ngOnInit() {}

}
