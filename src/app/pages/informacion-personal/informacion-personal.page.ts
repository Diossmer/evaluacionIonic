import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// IMPORTACIÓN DE COMPONENTES DE INTERFAZ:
// Agregué IonList aquí para que Angular reconozca la etiqueta del HTML
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButtons, IonMenuButton, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { serverOutline, logoAngular, constructOutline } from 'ionicons/icons';

@Component({
  selector: 'app-informacion-personal', // <-- Selector correcto de la página
  templateUrl: './informacion-personal.page.html', // <-- Apunta al HTML correcto
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: true,
  // Asegúrate de que IonList esté en este arreglo:
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButtons, IonMenuButton, IonList]
})
export class InformacionPersonalPage implements OnInit { // <-- Clase correcta

  constructor() {
    // Registro los íconos específicos que adornarán mis habilidades técnicas
    addIcons({ serverOutline, logoAngular, constructOutline });
  }

  ngOnInit() {
  }

}