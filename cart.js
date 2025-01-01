        // Function to load the cart items from localStorage
        window.onload = function () {
            loadCart();
        };

        // Function to load cart items and display them
        function loadCart() {
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            let cartContent = document.getElementById("cart-items");
            let totalPrice = document.getElementById("total-price");
            let total = 0;

            cartContent.innerHTML = ""; // Clear the cart content before adding new items

            if (cartItems.length === 0) {
                totalPrice.innerHTML = "$0.00"; // If no items, display 0
            } else {
                cartItems.forEach((item, index) => {
                    let price = parseFloat(item.price.replace(/[^0-9.]/g, "")); // Extract price value
                    let quantity = parseInt(item.quantity) || 1; // Get quantity, default to 1 if not specified

                    if (isNaN(price)) {
                        price = 0;
                    }

                    // Create item display
                    let itemDiv = document.createElement("div");
                    itemDiv.classList.add("cart-item");
                    itemDiv.setAttribute("data-index", index);

                    let itemHTML = `
                        <div class="cart-box">
                            <img src="${item.imgSrc}" class="cart-img" alt="${item.title}" />
                            <h2 class="cart-item-title">${item.title}</h2>
                            <span class="cart-item-price">$${price.toFixed(2)}</span>
                            <input type="number" value="${quantity}" class="cart-quantity" onchange="updateQuantity(${index}, this.value)" min="1">
                            <i class="fa-solid fa-trash cart-remove" onclick="removeItem(${index})"></i>
                        </div>
                    `;
                    itemDiv.innerHTML = itemHTML;

                    cartContent.appendChild(itemDiv);
                    total += price * quantity; // Calculate total
                });

                totalPrice.innerHTML = `$${total.toFixed(2)}`; // Display total
            }

            updateBuyButtonState();
        }

        // Function to update quantity of an item
        function updateQuantity(index, value) {
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            let quantity = parseInt(value);

            if (isNaN(quantity) || quantity < 1) {
                quantity = 1;
            }

            cartItems[index].quantity = quantity; // Update quantity in cart
            localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save updated cart

            loadCart();
        }

        // Function to remove item from cart
        function removeItem(index) {
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems.splice(index, 1); // Remove item by index
            localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save updated cart

            loadCart();
        }

        // Function to enable/disable the "Buy Now" button
        function updateBuyButtonState() {
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            let buyButton = document.getElementById("buy-button");

            if (cartItems.length > 0) {
                buyButton.disabled = false; // Enable if items in cart
            } else {
                buyButton.disabled = true; // Disable if cart is empty
            }
        }