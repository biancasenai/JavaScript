var anonascimento = 2004;

if (anonascimento > 2003) console.log(`a pessoa nasceu depois de 2003!`);

if (anonascimento < 2003);
console.log(`a pessoa nasceu antes de 2003!`);

if (anonascimento == 2023);
console.log(`a pessoa nasceu em 2003!`);

//condicional composto por if
const login = "admin"; //digitado pelo usuario
var senha = "12345"; //digitado pelo usuario

//-----------------------------------------//
const loginUser = "admin"; //banco de dados
const senhaUser = "admin"; //banco de dados
//-----------------------------------------//
if (login == loginUser && senhaUser)
  //$$ significa E -- || significa OU
  console.log(`acesso permitido"`);
else console.log(`acesso negado!`);

//função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log("pare");

  if (cor == "amarelo") console.log("preste atenção");

  if (cor == "verde") console.log("siga");

  console.log("voce informou cores diferente de verde, amarelo ou vermelho");
}
sinaleiro("vermelho");

//desvio condicional if com bloco de comandos
console.log(`-----------------------------------------`);
var idade = 18;

if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("incrementei a idade...");
  console.log(`a nova idade é ${idade}`);
  console.log(`agora estou saindo do bloco de codigos if`);
}
console.log(`terminei!`);

//desvio condicional if inline (ternario)
//validação (alho == algo) ou (algo >algumacoisa
// ? (IF)
//Se for verdadeiro
// : (ELSE)
//Se for falso
// testeDeValidação == teste "bla bla" : ("ble ble")
var preco = 100;

var resultado = preco <= 100 ? "ta barato" : "vish ta caro!";

console.log(resultado);
