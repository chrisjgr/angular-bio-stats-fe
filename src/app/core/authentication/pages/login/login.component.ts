import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from '@core/authentication/services/auth.service';
import { Router } from '@angular/router';



type loginEmitter = {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    WelcomeComponent,
    LoginFormComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private readonly autService: AuthService,
    private readonly router: Router
  ){}

  handleLoginSubmitted(event:loginEmitter ) {

    console.log({event});


    this.autService.login(event.email, event.password)
    .subscribe((res) => {
      console.log({res});

        if (res !== null) {
            this.autService.setUserState(res.user);
            this.router.navigate(["/dashboard"]);
        }
    });
  }

}
