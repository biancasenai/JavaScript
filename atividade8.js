

console.log("-----------------------------------")
 
console.log(`__|__|__`)
console.log(`__|__|__`)
console.log(`  |  |  `)



const tabuleiro = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  let jogadorX = "X";
  let jogadorO = "O";
  
  
  function jogar(jogador) {
    let linha, coluna;
    do {
      linha = Math.floor(Math.random() * 3);
      coluna = Math.floor(Math.random() * 3);
    } while (tabuleiro[linha][coluna] !== " ");
  
  
    tabuleiro[linha][coluna] = jogador;
  }  

  