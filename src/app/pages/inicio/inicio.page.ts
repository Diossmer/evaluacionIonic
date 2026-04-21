import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// IMPORTACIÓN DE COMPONENTES DE INTERFAZ:
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  // Agregamos IonButtons e IonMenuButton para poder usar el menú lateral
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
