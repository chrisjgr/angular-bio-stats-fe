import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef, NgZone } from '@angular/core';
import { MatButtonModule, MatButton } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent extends MatButton {
  constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone){
    super(
      elementRef,
      platform,
      ngZone
    );
  }

}
