import { Component } from '@angular/core';
import { ReadingCardsComponent } from './components/reading-cards/reading-cards.component';
import { SensorsCardsComponent } from './components/sensors-cards/sensors-cards.component';

type monitorItem = {
  title: string;
  quantity: number;
  class: 'ok' | 'warning' | 'alert' | 'error';
  icon: 'check' | 'priority_high' | 'warning' | 'close';
}

type sensors = {
  title: string;
  redAlerts: number;
  okAlerts: number;
  warningAlerts: number;
  icon: 'thermostat' | 'air' | 'analytics' | 'offline_bolt' | 'co2' | 'cloud' | 'water' | 'speed';
}

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    ReadingCardsComponent,
    SensorsCardsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  monitors: monitorItem[] = [
    {
      title: 'Lecturas OK',
      quantity: 0,
      class: 'ok',
      icon: 'check',
    },
    {
      title: 'Alertas medias',
      quantity: 0,
      class: 'warning',
      icon: 'priority_high',
    },
    {
      title: 'Alertas rojas',
      quantity: 0,
      class: 'alert',
      icon: 'warning',
    },
    {
      title: 'Sensores deshabilitados',
      quantity: 0,
      class: 'error',
      icon: 'close',
    },
  ]

  sensors: sensors[] = [
    {
      title: 'Temperatura',
      redAlerts: 0,
      okAlerts: 0,
      warningAlerts: 0,
      icon: 'thermostat',
    },
    {
      title: 'Presión',
      redAlerts: 0,
      okAlerts: 0,
      warningAlerts: 0,
      icon: 'speed',
    },
    {
      title: 'Viento',
      redAlerts: 0,
      okAlerts: 0,
      warningAlerts: 0,
      icon: 'air',
    },
    {
      title: 'Niveles',
      redAlerts: 0,
      okAlerts: 0,
      warningAlerts: 0,
      icon: 'water',
    },
    {
      title: 'Energía',
      redAlerts: 0,
      okAlerts: 0,
      warningAlerts: 0,
      icon: 'analytics',
    },
    {
      title: 'Tensión',
      redAlerts: 0,
      okAlerts: 0,
      warningAlerts: 0,
      icon: 'offline_bolt',
    },
    {
      title: 'CO2',
      redAlerts: 0,
      okAlerts: 0,
      warningAlerts: 0,
      icon: 'co2',
    },
    {
      title: 'Otros gases',
      redAlerts: 0,
      okAlerts: 0,
      warningAlerts: 0,
      icon: 'cloud',
    },
  ]
}
