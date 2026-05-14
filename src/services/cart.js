// 🩷 SHOPEE PINK CART 🩷

// CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  const existingItem = userCart.find((p) => p.name === item.name);

  // se já existir, soma quantidade
  if (existingItem) {
    existingItem.quantity += item.quantity;
    console.log(`💗 Quantidade atualizada: ${item.name}`);
    return;
  }

  userCart.push(item);
  console.log(`🛍️ Item adicionado: ${item.name}`);
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\n🩷 SHOPEE PINK CART TOTAL 🩷");

  const result = userCart.reduce(
    (total, item) => total + item.subtotal(),
    0
  );

  console.log(`🎀 Total do carrinho: R$ ${result.toFixed(2)}`);
}

// ✅ -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    console.log(`❌ Item removido: ${name}`);
    userCart.splice(index, 1);
  } else {
    console.log("⚠️ Item não encontrado");
  }
}

// ✅ -> remover apenas uma unidade
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex(
    (p) => p.name === item.name
  );

  if (indexFound == -1) {
    console.log("⚠️ Item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;

    console.log(
      `💔 Uma unidade removida de ${item.name}`
    );

    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);

    console.log(
      `🗑️ Última unidade removida: ${item.name}`
    );

    return;
  }
}

// ✅ -> mostrar carrinho
async function displayCart(userCart) {
  console.log("\n🩷 SHOPEE CART LIST 🩷");

  if (userCart.length === 0) {
    console.log("🛒 O carrinho está vazio");
    return;
  }

  userCart.forEach((item, index) => {
    console.log(`
🎀 ITEM ${index + 1}
💗 Produto : ${item.name}
💰 Preço   : R$ ${item.price.toFixed(2)}
📦 Qtde    : ${item.quantity}x
🧾 Subtotal: R$ ${item.subtotal().toFixed(2)}
-----------------------------
`);
  });
}

// ✅ -> limpar carrinho
async function clearCart(userCart) {
  userCart.length = 0;

  console.log("🧹 Carrinho limpo com sucesso");
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart,
  clearCart,
};
