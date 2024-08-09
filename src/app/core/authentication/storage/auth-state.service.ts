import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
   userSignal: WritableSignal<User | null> = signal(null);

  constructor() { }
  get user() {
    return this.userSignal();
  }

  setUser(user: User | null) {
    this.userSignal.set(user as User);
  }

}
