import { AbstractControl, ValidatorFn } from "@angular/forms";

export function profanityFilter(): ValidatorFn
{
    return (control:AbstractControl):{[key:string]:any} | null =>
    {
        let bannedWords = ["scemo", "cesare"];

        let username = control.value;

        username as String

        if(!username)
            return null;

        if(username.lenght)
            return {bannedWord: "Lungezza massima 8 caratteri"}


        for(let word of bannedWords)
        {
            if(username.toLowerCase().includes(word))
            {    
                return {bannedWord: "Parola proibita: "+word}
            }
        }

        return null;
    }
}