import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators extends Validators {

    static validateDateMoreCurrent(control: AbstractControl): { [key: string]: boolean } | null {
        const currentDate = new Date();

        return (control.value >= currentDate.setHours(currentDate.getHours() + 1)) ? null : { dateInvalid: true };

    }
}
