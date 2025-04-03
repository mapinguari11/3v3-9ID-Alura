// variáveis gerais
let personagem = ["", "", ""];
let heroisSecretos = ["Xena", "Buffy", "She-Ra", "Garnet", "Amethyst", "Pearl", "Steven"];
let viloes = ["", "", ""];
let viloesPossiveis = ["Nazare Tedesco", "Odete Roitmann", "Flora", "Carminha", "Laura Prudente da Costa", "Bia Falcão"];
let forcaPersonagem = 0;
let forcaViloes = 0;
let jogar = true;

do {
    //TIME DO JOGADOR
    for (let i=0; i<3; i++) {
        let escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));

        //caso jogador escolha ok sem digitar (undefined) ou se escolha cancelar (null)
        if (escolhaPersonagem === null || escolhaPersonagem === "") {
            let indiceAleatorioHeroi;
            let heroiSorteado;

            do {
                indiceAleatorioHeroi = Math.floor(Math.random() * heroisSecretos.length);
                heroiSorteado = heroisSecretos[indiceAleatorioHeroi];
            }  while (personagem.includes(heroiSorteado));
            escolhaPersonagem = heroiSorteado;

        }
        personagem[i] = escolhaPersonagem;
        console.log(personagem[i]);
        //adicionar força do personagem ao time
        forcaPersonagem += Math.floor(Math.random() * 10) +1;
    }

    //TIME DO COMPUTADOR
    for (let i=0; i<3; i++) {
        let indiceAleatorio;
        let vilaoSorteado;

        do {
            indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
            vilaoSorteado = viloesPossiveis[indiceAleatorio];
        } while (viloes.includes(vilaoSorteado))

        viloes[i] = vilaoSorteado;
        //adicionar força do personagem ao time
        forcaViloes += Math.floor(Math.random() * 10) +1;
    }

    alert(`Próximo jogo: ${personagem[0]}, ${personagem[1]} e ${personagem[2]} VERSUS...`);
    alert(`Próximo jogo: ${viloes[0]}, ${viloes[1]} e ${viloes[2]}!`);

    //compara os dois times para saber quem venceu
    if (forcaPersonagem > forcaViloes) {
        alert(`Seu time é mais forte que o time de vilões! Vocês somaram ${forcaPersonagem} pontos contra ${forcaViloes} pontos dos adversários!`);
    } else if (forcaPersonagem < forcaViloes) {
        alert(`Seu time não foi capaz de derrotar os vilões! Vocês somaram ${forcaPersonagem} pontos contra ${forcaViloes} pontos dos adversários!`)
    } else {
        alert(`Empate! Os dois times somaram ${forcaPersonagem} pontos! Que tal uma nova partida?`)
    }

    let continuar = confirm("Quer jogar de novo?");
    if (continuar === false) {
        alert("Até a próxima!");
        jogar = false;
    } else {
        personagem = [];
        viloes = [];
        forcaPersonagem = 0;
        forcaViloes = 0;
    }
} while (jogar)