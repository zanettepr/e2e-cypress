/// <reference types="Cypress" />

require('cypress-xpath');

const url = Cypress.config('baseUrl');
const loginElements = require('../page-elements/login-elements.js');

module.exports = {

    acessarPagina: () => {

        cy.visit(url);
    },

    preencherCampoEmail: (email) => {

        cy.xpath(loginElements.campoEmail())
            .type(email);
    },

    preencherCampoSenha: (senha) => {

        cy.xpath(loginElements.campoSenha())
            .type(senha);
    },

    clicarBotaoEntrar: () => {

        cy.xpath(loginElements.botaoEntrar())
            .click();
    }
}