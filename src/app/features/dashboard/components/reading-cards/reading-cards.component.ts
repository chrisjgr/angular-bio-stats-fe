import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'reading-cards',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './reading-cards.component.html',
  styleUrl: './reading-cards.component.scss'
})
export class ReadingCardsComponent {

   @Input()
   icon: 'check' | 'priority_high' | 'warning' | 'close' = 'check';

   @Input()
   className: 'ok' | 'warning' | 'alert' | 'error' = 'ok';

   @Input()
   title: string = 'Lecturas OK';

   @Input()
   quantity: number = 0;


   fontIcon = {
    check: 'check',
    priority_high: 'priority_high',
    warning: 'warning',
    close: 'close',
   }

}
