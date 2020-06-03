module.exports = {

    campoConta: () => {

        return '[data-test=nome]';
    },

    botaoSalvar: () => {

        return '//input[@data-test="nome"]/../following-sibling::div//button';
    },

    listaContas: () => {

        return '//table//tbody';
    },

    itemListaContas: () => {

        return '//tbody//tr';
    },

    botaoExcluirListaContas: (conta) => {

        return `//table//tbody//tr//preceding::td[contains(text(), '${conta}')]/..//i[@class = "far fa-trash-alt"]`;
    }
}