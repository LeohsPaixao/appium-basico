const _ = require('lodash');

const fillProductForm = async () => {
    // Incrementa o valor do código
    const nextCode =  _.random(1458, 9999, false);
    const code = nextCode.toString();

    // Preenche os campos do formulário
    await $("id=br.com.pztec.estoque:id/txt_codigo").addValue(`${code}`);
    await $("id=br.com.pztec.estoque:id/txt_descricao").addValue("Describe");
    await $("id=br.com.pztec.estoque:id/txt_unidade").addValue("5");
    await $("id=br.com.pztec.estoque:id/txt_quantidade").addValue("14");
    await $("id=br.com.pztec.estoque:id/txt_valunit").addValue("2.98");
    await $("id=br.com.pztec.estoque:id/txt_lote").addValue("2");
};

module.exports = { fillProductForm };
