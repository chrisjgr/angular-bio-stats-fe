import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LoginFormComponent } from './components/login-form/login-form.component';

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

}
