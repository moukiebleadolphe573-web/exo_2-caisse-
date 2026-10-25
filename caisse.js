let budget = 20000;
let prix_cahier = 1500;
let quantite_cahier = 4;
let prix_stylo = 500;
let quantite_stylo = 3;

let montant_cahier = prix_cahier * quantite_cahier;
let montant_stylo = prix_stylo * quantite_stylo;
let total = montant_cahier + montant_stylo;

console.log("budget :",budget, "FCFA");
console.log("prix_cahier :",prix_cahier, "FCFA");
console.log("quantite_cahier :",quantite_cahier, "FCFA");
console.log("prix_stylo :",prix_stylo, "FCFA");
console.log("quantite_stylo :",quantite_stylo, "FCFA");
console.log("montant_cahier :",montant_cahier, "FCFA");
console.log("montant_stylo :",montant_stylo, "FCFA");
console.log("total :", total, "FCFA");
if(budget >= total){
    console.log("budget suffisant")
} else{
    console.log("budget insuffisant")
}
for(let i = 1; i <=5; i++){
    console.log("Achat numero " +i)
}