// menu.js
const cardapio = [
    { codigo: "cafe", descricao: "Café", valor: 300 }, // Valor em centavos (R$ 3,00)
    { codigo: "chantily", descricao: "Chantily (extra do Café)", valor: 150 }, // Valor em centavos (R$ 1,50)
    { codigo: "suco", descricao: "Suco Natural", valor: 620 }, // Valor em centavos (R$ 6,20)
    { codigo: "sanduiche", descricao: "Sanduíche", valor: 650 }, // Valor em centavos (R$ 6,50)
    { codigo: "queijo", descricao: "Queijo (extra do Sanduíche)", valor: 200 }, // Valor em centavos (R$ 2,00)
    { codigo: "salgado", descricao: "Salgado", valor: 725 }, // Valor em centavos (R$ 7,25)
    { codigo: "combo1", descricao: "1 Suco e 1 Sanduíche", valor: 950 }, // Valor em centavos (R$ 9,50)
    { codigo: "combo2", descricao: "1 Café e 1 Sanduíche", valor: 750 } // Valor em centavos (R$ 7,50)
  ];

  const formas_pagamento = ['debito', 'credito', 'dinheiro'];
  
  const requisitoExtra = [ 
    { principal: 'cafe', extra: 'chantily' }, 
    { principal: 'sanduiche', extra: 'queijo' }
    ]
  
  
  export { cardapio, requisitoExtra, formas_pagamento };
  