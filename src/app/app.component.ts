import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenService } from '@core/services/token.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [CookieService, TokenService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-bio-stats-fe';
}
