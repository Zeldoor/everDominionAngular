import { AbstractControl, ValidatorFn } from "@angular/forms";

export function profanityFilter(): ValidatorFn
{
    return (control:AbstractControl):{[key:string]:any} | null =>
    {
        let bannedWords = ["scemo", "cesare"];

        let username = control.value || null;
        
        if(!username)
            return null;

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