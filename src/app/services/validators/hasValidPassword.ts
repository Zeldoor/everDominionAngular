import { AbstractControl, ValidatorFn } from "@angular/forms";

export function hasValidPassword(): ValidatorFn
{
    //ignora riga 3 e 5, sono sempre uguali Map<String,QualsiasiCosa>
    return (control:AbstractControl):{[key:string]:any} | null =>
    {
        let value = control.value || '';

        let hasUpperCase = /[A-Z]/.test(value);
        let hasLowerCase = /[a-z]/.test(value);
        let hasNumber = /\d/.test(value);
        let minLength = value.length >= 8;

        if (!minLength)
            return { passwordErr: "Password must contain at least 8 characters" };

        if (!hasUpperCase || !hasLowerCase) 
            return { passwordErr: "Password must contain at least one upper case and one lower case" };

        if (!hasNumber) 
            return { passwordErr: "Password must contain at least one number" };

        return null;
    }
}

