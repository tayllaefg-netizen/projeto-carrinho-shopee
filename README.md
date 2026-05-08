# 🛒 Projeto Carrinho Shopee


Projeto em **JavaScript** que simula um carrinho de compras inspirado na Shopee. A aplicação permite adicionar produtos, remover unidades, excluir itens, listar o carrinho e calcular o valor total da compra, praticando conceitos de lógica de programação, módulos e organização de código.


---


## 📌 Sobre o projeto


Este projeto foi desenvolvido como exercício de aprendizado em **Desenvolvimento Web**, com foco em JavaScript e estruturação de funções. A ideia principal é representar, no terminal, algumas operações comuns de um carrinho de compras.


---


## 🚀 Funcionalidades


- Adicionar itens ao carrinho
- Atualizar quantidade de produtos já existentes
- Remover uma unidade de um item
- Excluir um item do carrinho
- Exibir todos os produtos adicionados
- Calcular o total da compra
- Limpar o carrinho


---


## 🛠️ Tecnologias utilizadas


<div align="center">


![JavaScript](https://img.shields.io/badge/JavaScript-0d1117?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-0d1117?style=for-the-badge&logo=node.js&logoColor=339933)
![Git](https://img.shields.io/badge/Git-0d1117?style=for-the-badge&logo=git&logoColor=F05032)
![GitHub](https://img.shields.io/badge/GitHub-0d1117?style=for-the-badge&logo=github&logoColor=white)


</div>


---


## 📂 Estrutura do projeto


```bash
projeto-carrinho-shopee/
├── src/
│   ├── index.js
│   └── services/
│       ├── cart.js
│       └── item.js
├── package.json
└── README.md
```


---


## ▶️ Como executar


Clone o repositório:


```bash
git clone https://github.com/tayllaefg-netizen/projeto-carrinho-shopee.git
```


Acesse a pasta do projeto:


```bash
cd projeto-carrinho-shopee
```


Execute o arquivo principal:


```bash
node src/index.js
```


---


## 🧠 Conceitos praticados


- Criação e exportação de módulos
- Importação de funções em JavaScript
- Manipulação de arrays
- Uso de objetos
- Funções assíncronas
- Cálculo de subtotal e total
- Organização de responsabilidades por arquivo


---


## 💻 Exemplo de uso


```javascript
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.calculateTotal(myCart);
```


---


## 📊 Status do projeto


✅ Projeto desenvolvido para estudos e prática de JavaScript.


---


## 👩‍💻 Autora


Feito por **Tayla**.


[![GitHub](https://img.shields.io/badge/GitHub-tayllaefg--netizen-0d1117?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tayllaefg-netizen)



