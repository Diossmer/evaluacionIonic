import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// IMPORTACIÓN DE COMPONENTES DE INTERFAZ
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButtons, IonMenuButton, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { serverOutline, logoAngular, constructOutline } from 'ionicons/icons';

/**
 * Componente Standalone que renderiza el perfil y datos académicos del estudiante.
 */
@Component({
  selector: 'app-informacion-personal', // <-- Selector correcto de la página
  templateUrl: './informacion-personal.page.html', // <-- Apunta al HTML correcto
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButtons, IonMenuButton, IonList]
})
export class InformacionPersonalPage implements OnInit { // <-- Clase correcta

  /**
   * Registra los Ionicons necesarios para la vista.
   */
  constructor() {
    addIcons({ serverOutline, logoAngular, constructOutline });
  }

  /**
   * Método ejecutado tras inicializar el componente. Ideal para llamadas a APIs.
   */
  ngOnInit() {
  }

}