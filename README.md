# Sistema de elevador

## Instruções para uso:

* Instalar o NodeJs
* Para clonar o projeto use o comando: `git clone https://github.com/junioalbino/elevador.git`
* Para instalar os programas dependentes usar o comando: `chmod +x ./run.sh && ./run.sh`
* Para instalar as dependências do projeto usar o comando: `npm install`
* Para compilar use o comando: `tsc index.ts`
* Para rodar o programa: `node index.js`
* Para observar mudanças no arquivo rode o comando: `nodemon`
* Para compilar, executar e observar: rode o comando: `npm start`

## Requisitos funcionais

* O elevador deve oferecer uma interface para que o usuário escolha um andar
* O sistema deverá validar o andar escolhido
    * O número deverá estar entre um determinado intervalo
* O elevador deve exibir o andar escolhido
* O sistema deverá permitir que mais de um usuário escolha seu andar

## Requisitos não funcionais

* O sistema não deverá permitir que o usuário digite uma string
