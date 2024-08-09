import { ChangeDetectionStrategy, Component, Output, signal, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MyValidators } from 'src/app/shared/utils/myValidators';


type loginEmitter = {
  email: string;
  password: string;
}

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Output() loginSubmitted: EventEmitter<loginEmitter> = new EventEmitter<loginEmitter>();

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, MyValidators.emailValidation]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  handleLogin(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.loginSubmitted.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  getError(inputName: string, errorName: string) {
    return this.form.get(inputName)?.hasError(errorName);
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
