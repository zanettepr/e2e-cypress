/// <reference types="Cypress" />

require('cypress-xpath');

let qtdContasCadastradas = 0;
const contasElements = require('../page-elements/contas-elements.js');

function obterNumeroItensListaContas() {

    cy.xpath(contasElements.itemListaContas()).then(result => {
                
        qtdContasCadastradas = result.length;
    }); 
}

module.exports = {

    preencherCampoConta: (conta) => {

        obterNumeroItensListaContas();

        cy.get(contasElements.campoConta())
            .type(conta);
    },

    clicarBotaoSalvar: () => {

        cy.xpath(contasElements.botaoSalvar())
            .click();
    },

    clicarBotaoExcluirListaConta: (conta) => {

        obterNumeroItensListaContas();

        cy.xpath(contasElements.botaoExcluirListaContas(conta))
            .click();
    },

    validarCadastroConta: (conta) => {

        cy.xpath(contasElements.itemListaContas())
            .should('have.length', qtdContasCadastradas + 2);   

        cy.xpath(contasElements.listaContas())
            .contains(conta);
    },

    validarContaExcluida: (conta) => {

        cy.xpath(contasElements.itemListaContas())
            .should('have.length', qtdContasCadastradas - 2);

        cy.xpath(contasElements.listaContas())
            .should('not.contain', conta);
    }
}
