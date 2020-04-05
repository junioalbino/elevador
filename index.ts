// importar um módulo para ler o que o usuário digitou
import { createInterface } from "readline";

// cria a interface para usar a entrada e saída do terminal
const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

const andarInicial : Number = 0;
const andarFinal : Number = 20;

function escolha() {
    // faz a pergunta para o usuáio (input, entrada)
    rl.question('Elevador: Digite o andar desejado: ', (andarStr : string) => {

        const andarNum = Number(andarStr);
        
        // Se o andarNum for NaN, o sistema deverá ignorar
        if (isNaN(andarNum)) {
            escolha();
        } else {
            // Se o número digitado estiver fora do limite
            // deverá ser exibida uma mensagem
            if (andarNum < andarInicial || andarNum > andarFinal) {
                console.log(`O andar ${andarNum} é inválido.`);
                console.log(`Favor escolher um andar entre ${andarInicial} e ${andarFinal}.`);
            } else {
                // exibe o que o usuário digitou (output, saída)
                console.log(`Andar escolhido: ${andarNum}`);
            }

            escolha();
        }
    });
}

// Função recursiva
escolha();
