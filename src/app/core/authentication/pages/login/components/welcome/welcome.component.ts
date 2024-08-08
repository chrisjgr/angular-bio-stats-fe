import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'login-welcome',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  readonly welcomeList = [
    {
      icon: 'dynamic_form',
      title: 'Monitoreo integral',
      description: 'Administra, monitorea mutiples plantas de forma centralizada'
    },
    {
      icon: 'stars',
      title: 'Notificaciones en tiempo real',
      description: 'Recibi notificaciones en tiempo real sobre las mediciones'
    },
  ]
}
