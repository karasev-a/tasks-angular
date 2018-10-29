import { FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators extends Validators {

    // create a static method for your validation
    // static validateCharacters(control: FormControl) {

    //   // first check if the control has a value
    //   if (control.value && control.value.length > 0) {

    //     // match the control value against the regular expression
    //     const matches = control.value.match(validCharacters);

    //     // if there are matches return an object, else return null.
    //     return matches && matches.length ? { invalid_characters: matches } : null;
    //   } else {
    //     return null;
    //   }
    // }

    static validateDateMoreCurrent(currentDate: Date): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            // const currentDate: Date = new Date();
            // if (control.value < currentDate) {
            //     return { dateInvalid: true };
            // } else {
            //     return null;
            // }
            return (control.value < currentDate) ? { dateInvalid: true } : null;
        };
    }
  }
