/* 

In dieser Übung werden wir wieder Objekte kennenlernen.

    ! DONE: Erstelle ein Objekt und speichere es als Variable 'person'
    ! DONE: Deklariere die Eigenschaft 'name' mit dem Wert deines Namens,
    ! DONE: Deklariere die Eigenschaft alter mit dem Wert deines Alters,
    ! DONE: Deklariere die Methode (Funktion) 'sagNameAlter()' im Objekt
    ! DONE: Nutze den Befehl 'alert()' im Funktionskörper um 'name', 'alter' anzuzeigen.
    ! DONE: Gib in der Konsole 'name' und 'alter' aus.
    ! DONE: Rufe die Funktion 'sagNameAlter()' aus dem Objekt auf.

*/

const person = {
    firstName: 'Dominik',
    lastName: 'Gartz',
    age: 25,
    persona: () => {
        return alert('Name: ' + person.firstName + ' ' + person.lastName + '\nAge: ' + person.age)
    }
}

person.persona();
