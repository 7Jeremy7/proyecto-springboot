"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlMy = 'http://localhost:8080/mydrugs';
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(urlMy);
        const data = yield response.json();
        displayProdcucts(data.results);
    });
}
function displayProdcucts(products) {
    const container = document.getElementById('producto-container');
    if (container) {
        products.forEach(product => {
            container.innerHTML += `
            <div class="character-card">
            <img src="${product.id}" alt="${product.id}">   
            <h2>${product.nombredelProducto}</h2>
            <p>${product.descripción}}</p>
            <p>${product.inventario}}</p>
            </div>`;
        });
    }
}
fetchProducts();
