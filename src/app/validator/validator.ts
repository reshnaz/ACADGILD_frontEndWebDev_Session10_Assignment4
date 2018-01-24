import { FormControl } from '@angular/forms';

export function ThreeDigits(control: FormControl) {
    var regexp = new RegExp('^[0-9]{3}$');
    if (control.value !== "" && !regexp.test(control.value)) {
        return { validId: true };
    }
    return null;
}