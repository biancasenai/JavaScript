//crindo variaveis do tipo array(vetores)

var dinos = ["tiranossauro rex", "estegossauro", "arquilossauro"];
console.log(dinos);
console.log(dinos[0]);
console.log("");
console.table(dinos);
console.log("o vetor tem", dinos.length, "elementos");

//adicionando elementos ao vetor existente
dinos.push("brontossauro", "velocirapito");
console.table(dinos);

dinos.unshift("triceratops");
console.table(dinos);

//alterando elementos com base no indice (posiçao)
dinos[3] = "titanossauro";
console.table(dinos);

//obtendo elementos com base em seu indice
console.log("primeira posição:", dinos[0]);
console.log("segunda posição:", dinos[1]);
console.log("item da posição 20:", dinos[20]);

//removendo elementos do vetor
dinos.pop(); //remove o ultimo elemento do vetor
console.table;

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do indice 1 contando 1
console.table(dinos);

console.log("")
console.log("------------continuação aula----------------")
var dinos = [
           "triceratops",
           "tiranossauro rex",
           "estegossauro",
           "anquilossauro",
           "brontossauro",
           "ictiossauro",
           "pterodactilo",
           "espinossauro",
];

console.table(dinos);

var elementoprocurado = "brontossauro"
var posicao = dino.indexof(elementoprocurado)
console.log("o"+ elementoprocurado + "esta no indice" + posicao)

var elementoprocurado = "pterodactilo"
var posicao = dino.indexof(elementoprocurado)
console.log("o"+ elementoprocurado + "esta no indice" + posicao )

var elementoprocurado = "triceratops"
var posicao = dino.indexof(elementoprocurado)
    console.log("o" + elementoprocurado + "esta no indice" + posicao)


    //criando copia de array (vetor)
    var copia1 = dinos.slice ();
    console.log("vetor copia 1");
    console.table(copia1);

    var copia2 = dinos.slice(1,2)
    console.log("vetor copia 2")
    console.log(copia2)
    