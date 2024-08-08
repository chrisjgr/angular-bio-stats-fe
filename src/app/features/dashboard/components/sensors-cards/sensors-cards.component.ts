import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sensors-cards',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './sensors-cards.component.html',
  styleUrl: './sensors-cards.component.scss'
})
export class SensorsCardsComponent {

  @Input()
  icon: 'thermostat' | 'air' | 'analytics' | 'offline_bolt' | 'co2' | 'cloud' | 'water'  | 'speed' = 'thermostat';

  @Input()
  title: string = 'Lecturas OK';

  @Input()
  redAlerts: number = 0;

  @Input()
  okAlerts: number = 0;

  @Input()
  warningAlerts: number = 0;

  fontIcon = {
   thermostat: 'thermostat',
   air: 'air',
   analytics: 'analytics',
   offline_bolt: 'offline_bolt',
   co2: 'co2',
   cloud: 'cloud',
   water: 'water',
   speed: 'speed',
  }

  alerts = [
    {
      icon: 'check',
      class: 'ok',
      alertQuantity: this.okAlerts,
    },
    {
      icon: 'priority_high',
      class: 'warning',
      alertQuantity: this.warningAlerts,
    },
    {
      icon: 'warning',
      class: 'alert',
      alertQuantity: this.redAlerts,
    },
  ]
}
