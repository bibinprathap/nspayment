import {FormControl} from '@angular/forms';

export default class CustomValidators {
 
  static validateNumber(c: FormControl) {
    let NUMBER_REGEXP =  /^[1-9]$|^[1-2]\d$|^3[0-6]$/;

    return NUMBER_REGEXP.test(c.value)  != (c.value >= 5 && c.value <=500) ? null : {
      validateNumber: {
        valid: false
      }
    };
  }
}
