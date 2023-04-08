# Tic-Tac-Toe Game
Este é um simples jogo da velha (tic-tac-toe) feito com JavaScript, HTML e CSS. O jogo tem dois jogadores, X e O, que alternam entre marcar seus símbolos em um tabuleiro 3x3 até que um deles ganhe ou todos os espaços sejam preenchidos sem vencedor.

## Como jogar
Abra o arquivo index.html em seu navegador para começar o jogo.

Clique em qualquer um dos botões no tabuleiro para marcar o espaço com o símbolo X.

O próximo jogador marcará o espaço com o símbolo O.

Os jogadores alternam até que um deles ganhe ou todos os espaços sejam preenchidos.

Se um jogador conseguir colocar três de seus símbolos em uma linha vertical, horizontal ou diagonal, ele ganha.

Se todos os espaços forem preenchidos sem um vencedor, o jogo termina em empate.

Para iniciar um novo jogo, clique no botão "New Game".

Para reiniciar o jogo atual, clique no botão "Restart".

Como funciona o código
O código foi escrito com JavaScript e usa funções para manipular o tabuleiro, detectar um vencedor e atualizar a mensagem exibida na tela.

Existem funções para habilitar e desabilitar os botões do tabuleiro, determinar se um jogador ganhou ou empatou, e para reiniciar ou iniciar um novo jogo.

Os símbolos X e O são alternados em cada clique, usando uma variável booleana que muda de estado a cada vez que um botão é pressionado.

O jogo usa um array de padrões vencedores para verificar se um jogador ganhou a cada jogada.

Como executar o código
Para executar o código, abra o arquivo index.html em um navegador. O jogo será iniciado automaticamente e poderá ser jogado usando o mouse para clicar nos botões do tabuleiro.
