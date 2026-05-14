import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the Shopee Cart da Taylla!");

const item1 = await createItem("Vestido floral", 89.9, 1);
const item2 = await createItem("Bolsa feminina", 119.9, 1);
const item3 = await createItem("Sandalia rasteira", 59.9, 1);
const item4 = await createItem("Perfume feminino", 139.9, 1);
const item5 = await createItem("Kit maquiagem", 79.9, 1);
const item6 = await createItem("Brinco dourado", 29.9, 1);
const item7 = await createItem("Colar delicado", 34.9, 1);
const item8 = await createItem("Blusa feminina", 49.9, 1);
const item9 = await createItem("Saia jeans", 69.9, 1);
const item10 = await createItem("Necessaire rosa", 39.9, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);
await cartService.addItem(myCart, item6);
await cartService.addItem(myCart, item7);
await cartService.addItem(myCart, item8);
await cartService.addItem(myCart, item9);
await cartService.addItem(myCart, item10);

await cartService.displaycart(myCart);
await cartService.calculateTotal(myCart);
