/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let getränk = "Wein";
let alter;
let yourName;
yourName = prompt( "Bitte gib deinen Namen ein: ");
alter = parseInt( prompt( "Bitte gib dein Alter an: " ) );

if ( alter >= 0 && alter < 6 ) {   // Alter 0..5 ??
    getränk = "Milch";
} else if ( alter >=6 && alter < 13 ){  // Alter 6..12?? 
    getränk = "Saft";
} else if ( alter >= 13 && alter < 18 ){  // Alter 13..17?? 
    getränk = "Cola";
}

console.log( yourName + " trinkt " + getränk );