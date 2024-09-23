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
    ];

    let total = 0;
    const cartItems = {}; // Objeto para armazenar os itens do carrinho
    const sobremesa = document.querySelector('.container'); // Seleciona o container principal
    const cardGrid = document.createElement('div'); // Cria um único card-grid para todos os cards
    cardGrid.className = 'card-grid';
    desserts.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img class="card-image" src="${item.image.desktop}" alt="${item.name}">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-description">${item.category}</p>
            <button class="card-button">Add to cart</button>
            <span class="card-price">R$ ${item.price.toFixed(2).replace(".", ",")}</span>
            `;
        cardGrid.appendChild(card); // Adiciona cada card ao card-grid
    });
    sobremesa.appendChild(cardGrid); // Adiciona o card-grid ao container principal

    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        // use event.target para identificar qual botão foi clicado
        const buttonClicked = event.target;
        const productCard = buttonClicked.closest('.card'); // Assume que os produtos estão dentro de um elemento com classe 'card'

        // Agora capture os elementos dentro desse card específico
        const price = parseFloat(productCard.querySelector('.card-price').innerText.replace("R$", "").replace(",", "."));
        const title = productCard.querySelector('.card-title').innerText;

        // Verifica se o item já está no carrinho
        if(cartItems[title]) {
            cartItems[title].quantity += 1;
        } else {
            cartItems[title] = {
                price: price,
                quantity: 1
            };

            const cart = document.querySelector('#cart');
            const newCart = document.createElement('div');
            newCart.className = 'cart-item';
            newCart.innerHTML = `
                <div class="cart-item">
                    <span class="product-identification">
                        <strong class="card-title">${title}</strong>
                    </span>
                    <span>
                        <span class="card-price">R$ ${price.toFixed(2).replace(".", ",")}</span>
                    </span>
                    <span>
                        <input type="number" value="1" min="1" class="quantity-input" id="quantity-${title.replace(/\s+/g, '-').toLowerCase()}" name="quantity-${title.replace(/\s+/g, '-').toLowerCase()}">
                        <button class="remove-button">Remover</button>
                    </span>
                </div>
            `;
            cart.appendChild(newCart);

            // Adiciona o evento de remoção e atualização ao novo botão de remoção
            const removeButton = newCart.querySelector('.remove-button');
            removeButton.addEventListener('click', () => removeOfCart(title));

            const quantityInput = newCart.querySelector('.quantity-input');
            quantityInput.addEventListener('change', (event) => updateQuantity(title, event.target.value));
        };

        updateTotal(); // Chama a função updateTotal dentro da função addToCart
    }

    function removeOfCart(title) {
        delete cartItems[title];
        document.querySelector(`#quantity-${title.replace(/\s+/g, '-').toLowerCase()}`).closest('.cart-item').remove();
        updateTotal();
    };

    function updateQuantity(title, quantity) {
        cartItems[title].quantity = parseInt(quantity);
        updateTotal();
    }

    function updateTotal() {
        total = 0;
        for(let title in cartItems) {
            const item = cartItems[title];
            total += item.price * item.quantity;
        }
        const formattedTotal = total.toFixed(2).replace(".", ",");
        document.querySelector('.total').innerText = `Total: R$ ${formattedTotal}`;
    }
});
   



