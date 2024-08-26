document.addEventListener('DOMContentLoaded', () => {
    const desserts = [
        {
            "image": {
                "thumbnail": "./assets/image/image-waffle-thumbnail.jpg",
                "mobile": "./assets/image/image-waffle-mobile.jpg",
                "tablet": "./assets/image/image-waffle-tablet.jpg",
                "desktop": "./assets/image/image-waffle-desktop.jpg"
            },
            "name": "Waffle with Berries",
            "category": "Waffle",
            "price": 6.50
        },
        {
            "image": {
                "thumbnail": "./assets/image/image-creme-brulee-thumbnail.jpg",
                "mobile": "./assets/image/image-creme-brulee-mobile.jpg",
                "tablet": "./assets/image/image-creme-brulee-tablet.jpg",
                "desktop": "./assets/image/image-creme-brulee-desktop.jpg"
            },
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 7.00
        },
        {
            "image": {
                "thumbnail": "./assets/image/image-macaron-thumbnail.jpg",
                "mobile": "./assets/image/image-macaron-mobile.jpg",
                "tablet": "./assets/image/image-macaron-tablet.jpg",
                "desktop": "./assets/image/image-macaron-desktop.jpg"
            },
            "name": "Macaron Mix of Five",
            "category": "Macaron",
            "price": 8.00
        },
        {
            "image": {
                "thumbnail": "./assets/image/image-tiramisu-thumbnail.jpg",
                "mobile": "./assets/image/image-tiramisu-mobile.jpg",
                "tablet": "./assets/image/image-tiramisu-tablet.jpg",
                "desktop": "./assets/image/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 5.50
        },
        {
            "image": {
                "thumbnail": "./assets/image/image-baklava-thumbnail.jpg",
                "mobile": "./assets/image/image-baklava-mobile.jpg",
                "tablet": "./assets/image/image-baklava-tablet.jpg",
                "desktop": "./assets/image/image-baklava-desktop.jpg"
            },
            "name": "Pistachio Baklava",
            "category": "Baklava",
            "price": 4.00
        },
        {
            "image": {
                "thumbnail": "./assets/image/image-meringue-thumbnail.jpg",
                "mobile": "./assets/image/image-meringue-mobile.jpg",
                "tablet": "./assets/image/image-meringue-tablet.jpg",
                "desktop": "./assets/image/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 5.00
        },
        {
            "image": {
                "thumbnail": "./assets/image/image-cake-thumbnail.jpg",
                "mobile": "./assets/image/image-cake-mobile.jpg",
                "tablet": "./assets/image/image-cake-tablet.jpg",
                "desktop": "./assets/image/image-cake-desktop.jpg"
            },
            "name": "Red Velvet Cake",
            "category": "Cake",
            "price": 4.50
        },
        {
            "image": {
                "thumbnail": "./assets/image/image-brownie-thumbnail.jpg",
                "mobile": "./assets/image/image-brownie-mobile.jpg",
                "tablet": "./assets/image/image-brownie-tablet.jpg",
                "desktop": "./assets/image/image-brownie-desktop.jpg"
            },
            "name": "Salted Caramel Brownie",
            "category": "Brownie",
            "price": 4.50
        },
        {
            "image": {
                "thumbnail": "./assets/image/image-panna-cotta-thumbnail.jpg",
                "mobile": "./assets/image/image-panna-cotta-mobile.jpg",
                "tablet": "./assets/image/image-panna-cotta-tablet.jpg",
                "desktop": "./assets/image/image-panna-cotta-desktop.jpg"
            },
            "name": "Vanilla Panna Cotta",
            "category": "Panna Cotta",
            "price": 6.50
        }
    ]

    const sobremesa = document.querySelector('.container'); // Seleciona o container principal
    const cardGrid = document.createElement('div'); // Cria um único card-grid para todos os cards
    cardGrid.className = 'card-grid';
    desserts.forEach(function myList(item) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img class="card-image" src="${item.image.desktop}" alt="${item.name}">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-description">${item.category}</p>
            <button class="card-button">Add to cart</button>
            <span class="card-price">R$ ${item.price.toFixed(2)}</span>
            `;
        cardGrid.appendChild(card); // Adiciona cada card ao card-grid
    });
    sobremesa.appendChild(cardGrid); // Adiciona o card-grid ao container principal
});
