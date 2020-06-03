/* global Given, Then, When */

const loginActions = require('../page-actions/login-actions.js');

Given('que estou logado do sistema Estudos {string} {string}', (email, senha) => {

    loginActions.acessarPagina();

    loginActions.preencherCampoEmail(email);
    loginActions.preencherCampoSenha(senha);

    loginActions.clicarBotaoEntrar();
});

Given('que estou na página de login do sistema Estudos', () => {

    loginActions.acessarPagina();
});

When('preencho o campo Email {string}', (email) => {

    loginActions.preencherCampoEmail(email);
});

And('preencho o campo Senha {string}', (senha) => {

    loginActions.preencherCampoSenha(senha);
});

And('clico no botão Entrar', () => {

    loginActions.clicarBotaoEntrar();
});