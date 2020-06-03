/* global Given, Then, When */

const homeActions = require('../page-actions/home-actions.js');

Then('devo ser direcionado para a página home do sistema Estudos {string}', (mensagem) => {

    homeActions.validarMensagemTelaHome(mensagem);
});