let heroi = "Aranha"
let xp = 500
if(xp < 1000){
        console.log(heroi + " nível ferro")
} 
if (xp >= 1000 && xp <2001){
    console.log("Nível Bronze")
}
if (xp > 2000 && xp < 5001){
    console.log("Nível Prata")
}
if (xp > 5000 && xp < 7001){
    console.log("Nível Ouro")
}
if (xp >7001 && xp < 8001){
    console.log("Nível Platina")
}
if (xp > 8000 && xp < 9001){
    console.log("Nível Ascendente")
    
}
if (xp > 9000 && xp < 10001){
	console.log("Nível Imortal")
}
if (xp >= 10001){
	console.log("Nível Radiante")
}
// tentei usar o switch case mas não consegui que comparasse números, pesquisei na internet 
// mas não achei nenhum exemplo do comando comparando valores numéricos. Então usei o if else
