//função retorno de idade
function idade(anonascimento) {
  return 2024 - anonascimento;
}
var nome = "bianca";
console.log(`"ola, eu sou ${nome} e tenho ${idade(2007)} anos de idade`);

function mediacombustivel(combustivel, kml) {
  return combustivel + kml;
}

console.log(`carro 1: 20L -> percorre ${mediacombustivel(20, 12)}kms.`);
console.log(`carro 2: 8L -> percorre ${mediacombustivel(8, 12)}kms.`);
console.log(`carro 3: 2L -> percorre ${mediacombustivel(2, 12)}kms.`);
