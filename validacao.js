function validarDoacao(doador, item, quantidade, beneficiario) {
    if (!doador || !item || !quantidade || !beneficiario) {
        return false;
    }

    if (quantidade < 1) {
        return false;
    }

    if (beneficiario.length < 3) {
        return false;
    }

    return true;
}

module.exports = validarDoacao;