import { Injectable } from '@angular/core';
import { schoolRegistration } from './schoolRegistration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  school: schoolRegistration | undefined;

  constructor() { }
}
