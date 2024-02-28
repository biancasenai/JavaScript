var idade = 16;

function votar(idade) {
  if (idade <= 16) console.log("voce nao pode votar");

  if (idade >= 16) console.log("voce pode votar,mas nao é obrigatorio");
}

console.log("---------------------------------------------");

function votacao(idade) {}
switch (true) {
  case idade < 16:
    console.log(`voce nao pode votar`);
    break;
  case idade >= 16 && idade < 18:
    console.log(`voce pode votar ,mas não é obrigatorio`);
    break;
  default:
    console.log(`voce pode votar`);
    break;
}
