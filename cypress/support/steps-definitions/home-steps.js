/* global Given, Then, When */

const homeActions = require('../page-actions/home-actions.js');

When('clico no menu Configurações', () => {

    homeActions.clicarMenuConfigracoes();
});

And('clico no sub-menu Contas', () => {

    homeActions.clicarSubMenuContas();
});

Then('devo ser direcionado para a página home do sistema Estudos {string}', (mensagem) => {

    homeActions.validarMensagemTelaHome(mensagem);
});