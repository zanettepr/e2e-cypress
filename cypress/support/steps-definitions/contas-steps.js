/* global Given, Then, When */

const contasActions = require('../page-actions/contas-actions.js');

And('preencho o campo Conta {string}', (conta) => {

    contasActions.preencherCampoConta(conta);
});

And('clico no botão Salvar', () => {

    contasActions.clicarBotaoSalvar();
});

Then('o sistema salva e apresenta a nova conta na lista {string}', (conta) => {

    contasActions.validarCadastroConta(conta);
});