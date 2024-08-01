import { AbstractControl, ValidatorFn } from "@angular/forms";

export function notFutureDateValidation(startDate: string, endDate: string): ValidatorFn
{
    return (control:AbstractControl):{[key:string]:any} | null =>
    {
        let start = new Date(control.get(startDate)?.value);
        let end = new Date(control.get(startDate)?.value);

        let isDifferenceOF10Days = (start.getTime()-end.getTime()) >= (10*24*60*60*1000); //controllo in millisecondi

        if(end>start)
            return {StartLowerThenEnd: "Start date must be before end date"};
        
        if(!isDifferenceOF10Days)
            return  { lowDaysDifference: "Start date must be before end date"};

        return null;
    }
}