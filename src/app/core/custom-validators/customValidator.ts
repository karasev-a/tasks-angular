import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators extends Validators {

    static validateDateMoreCurrent(currentDate: Date): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            return (control.value > currentDate.setHours(currentDate.getHours() + 1)) ? null : { dateInvalid: true };
        };
    }
  }
