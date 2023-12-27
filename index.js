//Classificador nível de herói
const prompt = require('prompt-sync')();


let nomeHeroi = prompt("Digite o nome do heroi: ");
 
let valorXp = prompt("Digite o valor do XP do heroi: ");


if (valorXp <= 1000){
    nivel = "ferro"
    
}else if (valorXp > 1001 && valorXp <= 2000){
    nivel = "Bronze"
    
}else if (valorXp > 2001 && valorXp <= 5000){
    nivel = "Prata"
    
}else if (valorXp > 5001 && valorXp <= 7000){
    nivel = "Ouro"
    
}else if (valorXp > 7001 && valorXp <= 8000){
    nivel = "Platina"
    
}else if (valorXp > 8001 && valorXp <= 9000){
    nivel = "Ascendente"
    
}else if (valorXp > 9001 && valorXp <= 10000){
    nivel = "Imortal"
    
}else if (valorXp >=  10001){
    nivel = "Radiante"
    
}else{
    nivel = "Sem classificação"
    
}
console.log ("O herói de nome " + nomeHeroi +" "+ "está no nível " + "" + nivel )    