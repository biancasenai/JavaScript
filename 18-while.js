let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}

var x = 20;

while (x > 10) {
  console.log("entrei no laço while ...");
  x--;
}
console.log("terminei!");

//contagem regressiva
let counntdown = 5;

while (counntdown > 0) {
  console.log(counntdown);
  counntdown--;
}

console.log("lançamento");

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(`gastei R$ ${gasto.toFixed(2)}----------- fatura: R$ ${fatura}`);

  fatura > limite && console.log(`estourou o limite do cartão`);
}

//estourando o limite do cartao - versão do while

var limite = 500;
var fatura = 0;
do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `gastei R$ ${gasto.toFixed(2)} -------- fatura : R$ ${fatura.toFixed(2)}`
  );
  fatura > limite && console.log(`estourou o limite do cartão`);
} while (fatura <= limite);

console.log("-----------------------------");

var rodada = 1;
var moeda = "";
var escolhajogador = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.3 ? "cara" : "coroa";
  escolhajogador = Math.random() >= 0.3 ? "cara" : "coroa";

  if (escolhajogador == "cara") {
    console.log(`parabens, voce ganhou`);
    vitoria++;
  } else {
    console.log(`que pena, voce perdeu!`);
    derrota++;
  }
  rodada++;
}

console.log("---------------------------------");
console.log(`          PLACAR         `);
console.log("---------------------------------");
console.log(
  `${vitoria > derrota ? "💵 VOCE VENCEU ! 🥳🎉" : "🙁 VOCE PERDEU 💸"}`
);
console.log("---------------------------------");
