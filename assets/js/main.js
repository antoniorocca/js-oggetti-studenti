var studente = {
    nome : "Antonio",
    cognome : "Rocca",
    età :  25
}

for (var key in studente) {
    console.log(studente[key]);
}

var studenti = [
{
   nome : "Mario",
   cognome : "Bianchi",
   età :  25
},
{
   nome : "Riccardo",
   cognome : "Rossi",
   età :  30
},
{
   nome : "Paolo",
   cognome : "Valenti",
   età :  28
}
]

for(i=0; i < studenti.length; i++){
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
};

var nuovoStudente = {
    nome : prompt("Inserisci il tuo nome"),
    cognome : prompt("Inserisci il tuo cognome"),
    età : Number(prompt("Inserisci la tua età"))
};
studenti.push(nuovoStudente);
console.log(studenti)