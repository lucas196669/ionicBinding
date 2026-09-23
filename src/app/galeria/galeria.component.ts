import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';
import { Usuario } from '../usuario';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel,IonItem } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonItem],
})
export class GaleriaComponent  implements OnInit {
  public titulo: string = 'Galería de imágenes';
  public descripcion: string = 'Pez Payaso';
  public imagen: string = 'assets/images/imagen1.jpg';

  users:Usuario[] = [];

  constructor(private usersService: Servicio) {}

 async ngOnInit() {
  this.users = await this.usersService.getUsuarios();
  }

}
