import { AbstractControl } from "@angular/forms";

export class MyValidators {
  static emailValidation(control: AbstractControl) {
    const email = control.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const valid = emailPattern.test(email);
    return valid ? null : { invalidEmail: true };
  }

}

