/* global Given, Then, When */

const contasActions = require('../page-actions/contas-actions.js');

And('preencho o campo Conta {string}', (conta) => {

    contasActions.preencherCampoConta(conta);
});

And('clico no botão Salvar', () => {

    contasActions.clicarBotaoSalvar();
});

And('clico no Botao excluir de uma Conta {string}', (conta) => {

    contasActions.clicarBotaoExcluirListaConta(conta);
});

Then('o sistema salva e apresenta a nova conta na lista {string}', (conta) => {

    contasActions.validarCadastroConta(conta);
});

Then('o sistema deve excluir a Conta {string}', (conta) => {

    contasActions.validarContaExcluida(conta);
});