var idade = 17
console.log(`Você tem ${idade} anos`)
// condições aninhadas
if(idade<16){
    console.log("Não vota")
} else if(idade>=16 && idade <18 || idade > 65){
    console.log("voto opcional")
} else {
    console.log("Vota")
}