
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Update cart display
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    const cartButton = document.getElementById('cartButton');
    
    cartCount.textContent = `Cart: ${totalItems} items`;
    
    if (totalItems > 0) {
        cartButton.style.display = 'inline-block';
        cartCount.className = 'badge bg-primary';
    } else {
        cartButton.style.display = 'none';
        cartCount.className = 'badge bg-secondary';
    }
}

// Add to cart function
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price,quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert(`${name} added to cart!`);
}

// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('cart');
    window.location.href = 'login.html';
}

// Initial load
updateCartDisplay();

