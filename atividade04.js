//crie uma matriz 3x3
var matriz = [
    [9, 0, 1],
    [7, 1, 2],
    [6, 2, 8],
];
console.table(matriz);

//exibir ao usuario valores dasc diagonais (4)
console.log(matriz[0][0],matriz[1][1],matriz[2][2])
console.log(matriz[0][0],matriz[1][1],matriz[2][0])
console.log(matriz[0][0],matriz[1][1],matriz[0][2])
console.log(matriz[0][0],matriz[1][1],matriz[0][0])

var usuario= ["BIanca",16,"roxo","amora","pedro ometto","nina e lua"]

console.log("olá", usuario[0], "seja bem vindo")
console.log("você mora no endereço",usuario[4],"e tem um pet chamado",usuario[5])
console.log("sua idade é",usuario[1],"e gosta muito da fruta",usuario[3])
console.log("sua cor favorita é",usuario[2])