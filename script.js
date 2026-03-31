const products = [
            {
                id: 1,
                name: "PlayStation 5 Pro",
                price: 599,
                category: "Electronics",
                image: "playstation5.jpg",
            },

            {
                id: 2,
                name: "Apple Watch Series 10",
                price: 299,
                category: "Electronics",
                image: "applewatch.jpg"
            },

            {
                id: 3,
                name: "Wilson Basketball",
                price: 79,
                category: "Sports",
                image: "basketball.jpg",
            }
        ];

        let cartCount = 0;
        const productContainer = document.getElementById("product-container");
        const cartInfo = document.getElementById("cart-info");

        function updateCart() {
            cartInfo.textContent = "Cart Items: " + cartCount;
        }

        function addToCart() {
            cartCount++;
            updateCart();
        }

        function displayProducts() {
            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                const card = document.createElement("div");
                card.className = "product-card";

                const image = document.createElement("img");
                image.src = product.image;
                image.alt = product.name;

                const title = document.createElement("h2");
                title.textContent = product.name;

                const price = document.createElement("p");
                price.textContent = "Price: $" + product.price;

                const category = document.createElement("p");
                category.textContent = "Category: " + product.category;

                const button = document.createElement("button");
                button.textContent = "Add to Cart";
                button.onclick = addToCart;

                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(price);
                card.appendChild(category);
                card.appendChild(button);

                productContainer.appendChild(card);
            }
        }
        displayProducts();