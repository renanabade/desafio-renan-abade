import { cardapio, requisitoExtra, formas_pagamento } from './cardapio/cardapio.js';

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        // Verificar se a forma de pagamento é válida
        const pagamentoEhValido = formas_pagamento.includes(metodoDePagamento);
        if (!pagamentoEhValido) {
            return 'Forma de pagamento inválida!';
        }

        // Verificar se existem itens
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        // Organizar carrinho
        let carrinho = [];
        for (let item of itens) {
            const produto_e_quantidade = item.split(',');
            const produto = cardapio.find((item) => item.codigo === produto_e_quantidade[0]);

            if (!produto) {
                return "Item inválido!";
            }

            const quantidade = produto_e_quantidade[1];

            if (quantidade == 0) {
                return "Quantidade inválida!";
            }

            const itemCarrinho = {
                produto,
                quantidade
            };

            carrinho.push(itemCarrinho);
        }

        for (let item of carrinho) {
            // Verificar se o extra possui o principal
            const ehExtra = requisitoExtra.find((elemento) => elemento.extra === item.produto.codigo);

            if (ehExtra) {
                const possuiPrincipal = carrinho.find((elemento) => elemento.produto.codigo === ehExtra.principal);

                if (!possuiPrincipal) {
                    return 'Item extra não pode ser pedido sem o principal';
                }
            }
        }

        // Somar preço
        let preco = 0;
        for (let compra of carrinho) {
            preco += compra.produto.valor * compra.quantidade;
        }

        if (metodoDePagamento === 'credito') {
            preco += (3 / 100 * preco);
        } else if (metodoDePagamento === 'dinheiro') {
            preco -= (5 / 100 * preco);
        }

        preco = (preco / 100).toFixed(2);
        const precoFormatado = `R$ ${preco.replace('.', ',')}`;
        return precoFormatado;
    }
}

export { CaixaDaLanchonete };
