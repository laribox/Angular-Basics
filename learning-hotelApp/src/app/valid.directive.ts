import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[hotelValid]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidDirective, multi: true },
  ],
})
export class ValidDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const type = control.value as string;
    if (type.includes('test')) {
      return {
        invalid: true,
      };
    } else {
    }
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {}
}
