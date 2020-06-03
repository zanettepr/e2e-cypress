/// <reference types="Cypress" />

require('cypress-xpath');

const homeElements = require('../page-elements/home-elements.js');

module.exports = {

    validarMensagemTelaHome: (mensagem) => {

        cy.contains(mensagem)
            .should('be.visible')
            .wait(1000);
    },
}