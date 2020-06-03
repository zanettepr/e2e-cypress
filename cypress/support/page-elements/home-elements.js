module.exports = {

    menuConfiguracoes: () => {

        return '[data-test=menu-settings]';
    },

    subMenuContas: () => {

        return '//a[@data-test = "menu-settings"]/following-sibling::div//a[@href = "/contas"]';
    }
}