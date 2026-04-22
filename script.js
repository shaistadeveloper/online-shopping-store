// ONLINE SHOPPING STORE - Main JavaScript File

// ========== PRODUCTS DATA ==========

// Clothes - 9 Men + 9 Women = 18
const clothesProducts = [
    { id: 1, name: "Men's Casual Cotton Shirt", gender: "Men", category: "clothes", price: 2499, originalPrice: 3999, image: "images/Men’s Casual Cotton Shirt That Looks Expensive 👔Perfect Office & Weekend style.jpg", rating: 4, desc: "100% Men's Casual Cotton Shirt." },
    { id: 2, name: "Men's Formal Shirt", gender: "Men", category: "clothes", price: 3499, originalPrice: 4999, image: "images/download (9).jpg", rating: 5, desc: "Premium formal shirt." },
    { id: 3, name: "Men's Denim Jeans", gender: "Men", category: "clothes", price: 3999, originalPrice: 5099, image: "images/MD26LRF001_LIGHT_BLUE_3.webp", rating: 4, desc: "Slim fit jeans." },
    { id: 4, name: "Men's Hoodie", gender: "Men", category: "clothes", price: 3499, originalPrice: 4099, image: "images/buy this stylish black hoodie under lower price.jpg", rating: 5, desc: "Warm hoodie." },
    { id: 5, name: "Men Double Breasted Blazer", gender: "Men", category: "clothes", price: 15000, originalPrice: 17999, image: "images/Argento-Cadet Gray Solid Wool Rich Double Breasted Blazer.jpg", rating: 5, desc: "Gray solid premium wool." },
    { id: 6, name: "Men's Polo Shirt", gender: "Men", category: "clothes", price: 1999, originalPrice: 3999, image: "images/White polo shirt.jpg", rating: 4, desc: "Classic polo shirt." },
    { id: 7, name: "Men's kurta", gender: "Men", category: "clothes", price: 9999, originalPrice: 19999, image: "images/✨ Elevate your style with this handmade navy blue….jpg", rating: 5, desc: "Navy blue kurta." },
    { id: 8, name: "Men's Cargo Pants", gender: "Men", category: "clothes", price: 2999, originalPrice: 5999, image: "images/Trendy grey cargo pants outfit idea for men 👖….jpg", rating: 4, desc: "Cargo pants." },
    { id: 9, name: "Men's Sweater", gender: "Men", category: "clothes", price: 2999, originalPrice: 5999, image: "images/COOFANDY Men's Jumperss V-Neck Knitted Men's Sweater Long Sleeve Sweatershirt Casual Mens Tops Regular Fit Warm.jpg", rating: 4, desc: "Warm sweater." },
    { id: 10, name: "Anarkali Salwar Kameez", gender: "Women", category: "clothes", price: 3999, originalPrice: 7999, image: "images/Pastel Pink Silk Anarkali Bridal Salwar Kameez.jpg", rating: 5, desc: "Pastel Pink Silk." },
    { id: 11, name: "Embroidered Kurta Set with Dupatta", gender: "Women", category: "clothes", price: 1999, originalPrice: 3999, image: "images/Elegant Teal Green Embroidered Kurta Set with Blush Pink Dupatta _ Pakistani Festive Wear.jpg", rating: 4, desc: "Teal Green Embroidered Kurta Set with Blush Pink Dupatta" },
    { id: 12, name: "Luxury Wedding Outfit", gender: "Women", category: "clothes", price: 3499, originalPrice: 6999, image: "images/Pastel Mint Luxury Wedding Outfit _ Minimal Embroidery Royal Look.jpg", rating: 4, desc: "Flowy fabric, minimal yet intricate embroidery, and a soft lavender organza dupatta that adds a royal festive touch." },
    { id: 13, name: "Deep Red Farshi Shalwar Set", gender: "Women", category: "clothes", price: 3299, originalPrice: 6599, image: "images/Deep Red Farshi Shalwar Set with Antique Gold Work _ Minimal Royal Pakistani Outfit.jpg", rating: 5, desc: "Shirt paired with a flowing farshi shalwar. Adorned with delicate antique gold dabka, zari, tilla, and subtle resham detailing." },
    { id: 14, name: "Embroidered shirt with dupatta", gender: "Women", category: "clothes", price: 6999, originalPrice: 13999, image: "images/download (10).jpg", rating: 5, desc: "Black formal dress." },
    { id: 15, name: "Maroon Elegance Suit", gender: "Women", category: "clothes", price: 5999, originalPrice: 11999, image: "images/Instagram.jpg", rating: 5, desc: "Elegant maroon frock style dress with beautiful golden embroidery and delicate embellishments." },
    { id: 16, name: "Azure Beige Elegance Suit", gender: "Women", category: "clothes", price: 2499, originalPrice: 4999, image: "images/eid inspo, Desi , shalwar khameez.jpg", rating: 4, desc: "Graceful beige suit adorned with intricate blue embroidery." },
    { id: 17, name: "Pearl White Elegance Suit", gender: "Women", category: "clothes", price: 2799, originalPrice: 5599, image: "images/https___pin_it_7nS7PM5J2.jpg", rating: 4, desc: "Elegant pearl white suit with delicate golden embellishments." },
    { id: 18, name: "Emerald Royal Gown", gender: "Women", category: "clothes", price: 2299, originalPrice: 4599, image: "images/download (11).jpg", rating: 4, desc: "Stunning emerald green gown featuring intricate embellishments." }
];

// Shoes - 9 Men + 9 Women = 18
const shoesProducts = [
    { id: 19, name: "Men's Nike Air Sneakers", gender: "Men", category: "shoes", price: 14999, originalPrice: 29999, image: "images/AIR+FORCE+1+HIGH+ESS+NBY+LEA.avif", rating: 5, desc: "Nike Air sneakers." },
    { id: 20, name: "Men's Adidas Running Shoes", gender: "Men", category: "shoes", price: 12999, originalPrice: 25999, image: "images/Adidas Adidas herenschoenen, zomer-_herfstsportschoenen, hardloopschoenen voor heren, nieuwe mesh-schoenen, casual reisschoenen.jpg", rating: 4, desc: "Running shoes." },
    { id: 21, name: "Men's Formal Shoes", gender: "Men", category: "shoes", price: 6999, originalPrice: 13999, image: "images/Men's Formal Shoes, Vintage Brown Color Spliced….jpg", rating: 5, desc: "Premium formal shoes." },
    { id: 22, name: "Men's Casual Sneakers", gender: "Men", category: "shoes", price: 5499, originalPrice: 10999, image: "images/Men's Shoes & Sneakers.jpg", rating: 4, desc: "Casual sneakers." },
    { id: 23, name: "Men's Loafers", gender: "Men", category: "shoes", price: 4499, originalPrice: 8999, image: "images/Classic Brown Leather Loafers for Men _ Timeless Formal Style.jpg", rating: 4, desc: "Leather loafers." },
    { id: 24, name: "Men's Boots", gender: "Men", category: "shoes", price: 8999, originalPrice: 17999, image: "images/f2b6deda-fcde-48ab-b440-06daf8f2b1a0.avif", rating: 5, desc: "Winter boots." },
    { id: 25, name: "Traditional Men's Sandals", gender: "Men", category: "shoes", price: 2999, originalPrice: 5999, image: "images/Handmade Leather Peshawari Chappal - Traditional Men's Sandals.jpg", rating: 4, desc: "Handmade Leather Peshawari Chappal." },
    { id: 26, name: "Men's Canvas Shoes", gender: "Men", category: "shoes", price: 3499, originalPrice: 6999, image: "images/f6cd2058c2d9b15b828cc46f94aeb699.avif", rating: 4, desc: "Canvas shoes." },
    { id: 27, name: "Men's Slippers", gender: "Men", category: "shoes", price: 1499, originalPrice: 2999, image: "images/download (13).jpg", rating: 4, desc: "Comfortable slippers." },
    { id: 28, name: "Women's High Heels", gender: "Women", category: "shoes", price: 5499, originalPrice: 10999, image: "images/YSL.jpg", rating: 5, desc: "Stylish heels." },
    { id: 29, name: "Women's Sneakers", gender: "Women", category: "shoes", price: 5999, originalPrice: 11999, image: "images/I just found this on AliExpress_  New Spring_Autumn Women's Mesh Breathable Casual Shoes, Lightweigh.jpg", rating: 4, desc: "Fashion sneakers." },
    { id: 30, name: "Women's Sandals", gender: "Women", category: "shoes", price: 3499, originalPrice: 6999, image: "images/download (14).jpg", rating: 4, desc: "Flat sandals." },
    { id: 31, name: "Women's Flat Shoes", gender: "Women", category: "shoes", price: 2999, originalPrice: 5999, image: "images/Women's Brown Flat Shoes With Bowknot Detail,Spring Summer Outfits.jpg", rating: 4, desc: "Ballet flats." },
    { id: 32, name: "Women's Running Shoes", gender: "Women", category: "shoes", price: 6999, originalPrice: 13999, image: "images/download (15).jpg", rating: 5, desc: "Running shoes." },
    { id: 33, name: "Women's Wedges", gender: "Women", category: "shoes", price: 4499, originalPrice: 8999, image: "images/New wedges only @ 790_- free shipping Quality….jpg", rating: 4, desc: "Comfortable wedges." },
    { id: 34, name: "Women's Boots", gender: "Women", category: "shoes", price: 7999, originalPrice: 15999, image: "images/Product information_  Pattern_ solid color  Lining….jpg", rating: 5, desc: "Winter boots." },
    { id: 35, name: "Women's Sports Shoes", gender: "Women", category: "shoes", price: 5999, originalPrice: 11999, image: "images/White joggers.jpg", rating: 4, desc: "Sports shoes." },
    { id: 36, name: "Women's Slippers", gender: "Women", category: "shoes", price: 1499, originalPrice: 2999, image: "images/download (16).jpg", rating: 4, desc: "Comfortable slippers." }
];

// Watches - 9
const watchesProducts = [
    { id: 37, name: "Apple Watch Series 9", category: "watches", price: 89999, originalPrice: 99999, image: "images/Apple Watch.jpg", rating: 5, desc: "Latest Apple Watch." },
    { id: 38, name: "Samsung Galaxy Watch 6", category: "watches", price: 59999, originalPrice: 69999, image: "images/download (17).jpg", rating: 5, desc: "Samsung smart watch." },
    { id: 39, name: "Xiaomi Band 9 Pro", category: "watches", price: 9999, originalPrice: 19999, image: "images/Thay _áo mới_ cho Xiaomi Smart Band 9 Pro với nhiều lựa chọn khác nhau.jpg", rating: 4, desc: "Xiaomi smart watch." },
    { id: 40, name: "Realme Smart Watch", category: "watches", price: 7999, originalPrice: 15999, image: "images/Realme Unisex Black Smart Watch S.jpg", rating: 4, desc: "Realme smart watch." },
    { id: 41, name: "Huawei Watch GT 4", category: "watches", price: 39999, originalPrice: 49999, image: "images/huawei-watch-gt4-2x.webp", rating: 5, desc: "Premium Huawei watch." },
    { id: 42, name: "Fitbit Versa 4", category: "watches", price: 34999, originalPrice: 44999, image: "images/Fitbit Versa 4 - Gold _ White _ Fair.jpg", rating: 4, desc: "Fitness watch." },
    { id: 43, name: "Noise ColorFit Pro 5", category: "watches", price: 6999, originalPrice: 13999, image: "images/Noise ColorFit Pro 5 Smartwatch.jpg", rating: 4, desc: "Noise smart watch." },
    { id: 44, name: "Boat Xtend Smart Watch", category: "watches", price: 7999, originalPrice: 15999, image: "images/d805717268400532df8ad231765f006d.jpg", rating: 4, desc: "Boat smart watch." },
    { id: 45, name: "Amazfit GTR 4", category: "watches", price: 24999, originalPrice: 34999, image: "images/724614a955f4579f6ca7668a207808a3.jpg", rating: 5, desc: "Amazfit watch." }
];

// Bags - 9
const bagsProducts = [
    { id: 46, name: "Women's Leather Handbag", category: "bags", price: 5499, originalPrice: 10999, image: "images/Women's Bag Fashion Commuter Middle-aged Mother….jpg", rating: 5, desc: "Premium leather handbag." },
    { id: 47, name: "Men's Backpack", category: "bags", price: 3999, originalPrice: 7999, image: "images/Amazon_com _ Travel Laptop Backpack, Lightweight….jpg", rating: 4, desc: "Durable backpack." },
    { id: 48, name: "Women's Tote Bag", category: "bags", price: 4499, originalPrice: 8999, image: "images/UTILITY_ Purse and Handbag,Purses for Women….jpg", rating: 4, desc: "Spacious tote bag." },
    { id: 49, name: "Men's Laptop Bag", category: "bags", price: 3499, originalPrice: 6999, image: "images/백스테이-토트_서류.jpg", rating: 4, desc: "Laptop bag." },
    { id: 50, name: "Women's Clutch", category: "bags", price: 2499, originalPrice: 4999, image: "images/Upgrade your party look with this stunning evening….jpg", rating: 4, desc: "Elegant clutch." },
    { id: 51, name: "Travel Duffle Bag", category: "bags", price: 5999, originalPrice: 11999, image: "images/Green Sporty Collar  Polyester Letter Fashion….jpg", rating: 5, desc: "Travel duffle bag." },
    { id: 52, name: "Women's Crossbody Bag", category: "bags", price: 3999, originalPrice: 7999, image: "images/Bags Handbags Women Messenger Shoulder Bag….jpg", rating: 4, desc: "Crossbody bag." },
    { id: 53, name: "School Backpack", category: "bags", price: 2999, originalPrice: 5999, image: "images/Amazon_com_ abshoo Big Student Laptop Backpack For….jpg", rating: 4, desc: "School backpack." },
    { id: 54, name: "Women's Shoulder Bag", category: "bags", price: 4999, originalPrice: 9999, image: "images/Khaki Elegant Collar  PU Leather Colorblock,Letter….jpg", rating: 4, desc: "Shoulder bag." }
];

// Accessories - 9
const accessoriesProducts = [
    { id: 55, name: "Sunglasses", category: "accessories", price: 1999, originalPrice: 3999, image: "images/Casual Collar  PC  Óculos de aro completo….jpg", rating: 4, desc: "UV protection sunglasses." },
    { id: 56, name: "Leather Belt", category: "accessories", price: 1499, originalPrice: 2999, image: "images/1 Miếng Nam Thắt lưng , Đúng mốt & Linh hoạt….jpg", rating: 4, desc: "Premium leather belt." },
    { id: 57, name: "Wallet", category: "accessories", price: 1299, originalPrice: 2599, image: "images/_Premium Leather Wallets_ Perfect Blend of Style and Functionality_.jpg", rating: 4, desc: "Genuine leather wallet." },
    { id: 58, name: "Cap", category: "accessories", price: 899, originalPrice: 1799, image: "images/'47 New York Yankees Two-Tone Baseball Hat.jpg", rating: 4, desc: "Stylish cap." },
    { id: 59, name: "Watch Strap", category: "accessories", price: 599, originalPrice: 1199, image: "images/Introducing_ The Sedona Watch Strap Collection.jpg", rating: 4, desc: "Premium watch strap." },
    { id: 60, name: "Jewelry Set", category: "accessories", price: 2999, originalPrice: 5999, image: "images/cd156001f30e9b908d9b924456c2713b.jpg", rating: 5, desc: "Elegant jewelry set." },
    { id: 61, name: "Scarf", category: "accessories", price: 999, originalPrice: 1999, image: "images/Step into spring & summer with a lightweight….jpg", rating: 4, desc: "Soft silk scarf." },
    { id: 62, name: "Phone Case", category: "accessories", price: 799, originalPrice: 1599, image: "images/i phone 11 phone cover coquette.jpg", rating: 4, desc: "Protective phone case." },
    { id: 63, name: "Keychain", category: "accessories", price: 399, originalPrice: 799, image: "images/- Profilimdeki linkten satın….jpg", rating: 4, desc: "Stylish keychain." }
];

// Combine all products
const allProducts = [...clothesProducts, ...shoesProducts, ...watchesProducts, ...bagsProducts, ...accessoriesProducts];

// ========== CART FUNCTIONS ==========
function getCart() { return JSON.parse(localStorage.getItem('onlineCart')) || []; }
function saveCart(cart) { localStorage.setItem('onlineCart', JSON.stringify(cart)); updateCartCount(); }

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => { if(el) el.innerText = totalItems; });
}

function addToCart(productId, quantity = 1, size = null) {
    const product = allProducts.find(p => p.id === productId);
    if(!product) return;
    let cart = getCart();
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    if(existingItem) { existingItem.quantity += quantity; }
    else { cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, size: size, quantity: quantity }); }
    saveCart(cart);
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(index) { let cart = getCart(); cart.splice(index, 1); saveCart(cart); if(window.location.pathname.includes('cart.html')) loadCartPage(); }

function updateCartQuantity(index, change) {
    let cart = getCart();
    const item = cart[index];
    item.quantity += change;
    if(item.quantity <= 0) cart.splice(index, 1);
    saveCart(cart);
    if(window.location.pathname.includes('cart.html')) loadCartPage();
}

function getCartTotal() { const cart = getCart(); return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0); }

function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = isError ? 'toast-message error' : 'toast-message';
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ========== VALIDATION FUNCTIONS ==========
function validateName(name) { return /^[A-Za-z\s]{2,50}$/.test(name); }
function validatePhone(phone) { return /^[0-9]{11}$/.test(phone); }
function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function validateAddress(address) { return address.trim().length >= 5; }
function validatePostalCode(code) { return /^[0-9]{5,6}$/.test(code); }

// ========== PRODUCT CARD GENERATOR ==========
function getProductCard(product) {
    const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    const genderText = product.gender ? product.gender : '';
    return `<div class="col-md-4"><div class="product-card" onclick="goToProductDetail(${product.id})"><img src="${product.image}" class="product-img" alt="${product.name}"><div class="card-body"><h5 class="product-title">${product.name}</h5><div class="product-category">${genderText} ${product.category}</div><div class="product-price">PKR ${product.price.toLocaleString()}<span class="old-price">PKR ${product.originalPrice.toLocaleString()}</span></div><div class="rating">${stars}</div><button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">ADD TO CART</button></div></div></div>`;
}

function goToProductDetail(productId) { window.location.href = `product-detail.html?id=${productId}`; }

// ========== HOME PAGE FUNCTIONS ==========
function loadHomeProducts() {
    const clothes = document.getElementById('clothesContainer');
    const shoes = document.getElementById('shoesContainer');
    const watches = document.getElementById('watchesContainer');
    const bags = document.getElementById('bagsContainer');
    const accessories = document.getElementById('accessoriesContainer');
    
    if(clothes) { clothes.innerHTML = ''; clothesProducts.forEach(p => clothes.innerHTML += getProductCard(p)); }
    if(shoes) { shoes.innerHTML = ''; shoesProducts.forEach(p => shoes.innerHTML += getProductCard(p)); }
    if(watches) { watches.innerHTML = ''; watchesProducts.forEach(p => watches.innerHTML += getProductCard(p)); }
    if(bags) { bags.innerHTML = ''; bagsProducts.forEach(p => bags.innerHTML += getProductCard(p)); }
    if(accessories) { accessories.innerHTML = ''; accessoriesProducts.forEach(p => accessories.innerHTML += getProductCard(p)); }
}

// ========== SEARCH FUNCTION ==========
function searchHomeProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const clothes = document.getElementById('clothesContainer');
    const shoes = document.getElementById('shoesContainer');
    const watches = document.getElementById('watchesContainer');
    const bags = document.getElementById('bagsContainer');
    const accessories = document.getElementById('accessoriesContainer');
    
    if(searchTerm === "") { loadHomeProducts(); return; }
    
    const filtered = allProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
    
    if(clothes) clothes.innerHTML = '';
    if(shoes) shoes.innerHTML = '';
    if(watches) watches.innerHTML = '';
    if(bags) bags.innerHTML = '';
    if(accessories) accessories.innerHTML = '';
    
    if(filtered.length === 0) {
        const msg = '<div class="col-12 text-center"><p class="text-muted">No products found for "' + searchTerm + '"</p></div>';
        if(clothes) clothes.innerHTML = msg;
        return;
    }
    
    filtered.forEach(product => {
        if(product.category === 'clothes' && clothes) clothes.innerHTML += getProductCard(product);
        else if(product.category === 'shoes' && shoes) shoes.innerHTML += getProductCard(product);
        else if(product.category === 'watches' && watches) watches.innerHTML += getProductCard(product);
        else if(product.category === 'bags' && bags) bags.innerHTML += getProductCard(product);
        else if(product.category === 'accessories' && accessories) accessories.innerHTML += getProductCard(product);
    });
}

// ========== SHOP PAGE FUNCTIONS ==========
function loadAllShopProducts() {
    const clothesC = document.getElementById('clothesContainer');
    const shoesC = document.getElementById('shoesContainer');
    const watchesC = document.getElementById('watchesContainer');
    const bagsC = document.getElementById('bagsContainer');
    const accessoriesC = document.getElementById('accessoriesContainer');
    
    if(clothesC) { clothesC.innerHTML = ''; clothesProducts.forEach(p => clothesC.innerHTML += getProductCard(p)); }
    if(shoesC) { shoesC.innerHTML = ''; shoesProducts.forEach(p => shoesC.innerHTML += getProductCard(p)); }
    if(watchesC) { watchesC.innerHTML = ''; watchesProducts.forEach(p => watchesC.innerHTML += getProductCard(p)); }
    if(bagsC) { bagsC.innerHTML = ''; bagsProducts.forEach(p => bagsC.innerHTML += getProductCard(p)); }
    if(accessoriesC) { accessoriesC.innerHTML = ''; accessoriesProducts.forEach(p => accessoriesC.innerHTML += getProductCard(p)); }
}

function filterShopByCategory(category) {
    const clothesC = document.getElementById('clothesContainer');
    const shoesC = document.getElementById('shoesContainer');
    const watchesC = document.getElementById('watchesContainer');
    const bagsC = document.getElementById('bagsContainer');
    const accessoriesC = document.getElementById('accessoriesContainer');
    const clothesS = document.getElementById('clothesSection');
    const shoesS = document.getElementById('shoesSection');
    const watchesS = document.getElementById('watchesSection');
    const bagsS = document.getElementById('bagsSection');
    const accessoriesS = document.getElementById('accessoriesSection');
    
    if(category === "all") {
        if(clothesS) clothesS.style.display = "block";
        if(shoesS) shoesS.style.display = "block";
        if(watchesS) watchesS.style.display = "block";
        if(bagsS) bagsS.style.display = "block";
        if(accessoriesS) accessoriesS.style.display = "block";
        loadAllShopProducts();
    } else {
        if(clothesS) clothesS.style.display = "none";
        if(shoesS) shoesS.style.display = "none";
        if(watchesS) watchesS.style.display = "none";
        if(bagsS) bagsS.style.display = "none";
        if(accessoriesS) accessoriesS.style.display = "none";
        
        if(category === "clothes" && clothesS) {
            clothesS.style.display = "block";
            if(clothesC) { clothesC.innerHTML = ''; clothesProducts.forEach(p => clothesC.innerHTML += getProductCard(p)); }
        } else if(category === "shoes" && shoesS) {
            shoesS.style.display = "block";
            if(shoesC) { shoesC.innerHTML = ''; shoesProducts.forEach(p => shoesC.innerHTML += getProductCard(p)); }
        } else if(category === "watches" && watchesS) {
            watchesS.style.display = "block";
            if(watchesC) { watchesC.innerHTML = ''; watchesProducts.forEach(p => watchesC.innerHTML += getProductCard(p)); }
        } else if(category === "bags" && bagsS) {
            bagsS.style.display = "block";
            if(bagsC) { bagsC.innerHTML = ''; bagsProducts.forEach(p => bagsC.innerHTML += getProductCard(p)); }
        } else if(category === "accessories" && accessoriesS) {
            accessoriesS.style.display = "block";
            if(accessoriesC) { accessoriesC.innerHTML = ''; accessoriesProducts.forEach(p => accessoriesC.innerHTML += getProductCard(p)); }
        }
    }
}

function searchShopProducts(searchTerm) {
    const clothesC = document.getElementById('clothesContainer');
    const shoesC = document.getElementById('shoesContainer');
    const watchesC = document.getElementById('watchesContainer');
    const bagsC = document.getElementById('bagsContainer');
    const accessoriesC = document.getElementById('accessoriesContainer');
    
    if(searchTerm === "") { loadAllShopProducts(); return; }
    
    const filtered = allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if(clothesC) clothesC.innerHTML = '';
    if(shoesC) shoesC.innerHTML = '';
    if(watchesC) watchesC.innerHTML = '';
    if(bagsC) bagsC.innerHTML = '';
    if(accessoriesC) accessoriesC.innerHTML = '';
    
    if(filtered.length === 0) {
        const msg = '<div class="col-12 text-center"><p class="text-muted">No products found for "' + searchTerm + '"</p></div>';
        if(clothesC) clothesC.innerHTML = msg;
        return;
    }
    
    filtered.forEach(product => {
        if(product.category === 'clothes' && clothesC) clothesC.innerHTML += getProductCard(product);
        else if(product.category === 'shoes' && shoesC) shoesC.innerHTML += getProductCard(product);
        else if(product.category === 'watches' && watchesC) watchesC.innerHTML += getProductCard(product);
        else if(product.category === 'bags' && bagsC) bagsC.innerHTML += getProductCard(product);
        else if(product.category === 'accessories' && accessoriesC) accessoriesC.innerHTML += getProductCard(product);
    });
}

// ========== CART PAGE ==========
function loadCartPage() {
    const container = document.getElementById('cartItemsContainer');
    if(!container) return;
    const cart = getCart();
    if(cart.length === 0) {
        container.innerHTML = `<div class="text-center py-5"><i class="fas fa-shopping-bag fa-3x text-muted mb-3"></i><p class="text-muted">Your cart is empty</p><a href="shop.html" class="btn-primary-custom">Continue Shopping</a></div>`;
        document.getElementById('cartTotalAmount').innerText = '0';
        return;
    }
    let html = '<div class="table-responsive"><table class="table cart-table"><thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th></th></tr></thead><tbody>';
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `<tr><td data-label="Product"><div class="d-flex align-items-center gap-3"><img src="${item.image}" class="cart-item-img" alt="${item.name}"><div><h6 class="mb-0">${item.name}</h6>${item.size ? `<small>Size: ${item.size}</small>` : ''}</div></div></td><td data-label="Price">PKR ${item.price.toLocaleString()}</td><td data-label="Quantity"><div class="d-flex align-items-center gap-2"><button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity(${index}, -1)">-</button><span class="mx-2">${item.quantity}</span><button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity(${index}, 1)">+</button></div></td><td data-label="Total">PKR ${itemTotal.toLocaleString()}</td><td data-label="Remove"><button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button></td></tr>`;
    });
    html += `</tbody></table></div>`;
    container.innerHTML = html;
    document.getElementById('cartTotalAmount').innerText = total.toLocaleString();
}

// ========== PRODUCT DETAIL PAGE ==========
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = allProducts.find(p => p.id === productId);
    const container = document.getElementById('productDetailContainer');
    if(!container) return;
    if(product) {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
        const genderText = product.gender ? product.gender : '';
        container.innerHTML = `<div class="row"><div class="col-md-6"><img src="${product.image}" class="product-detail-img" alt="${product.name}"></div><div class="col-md-6"><h1>${product.name}</h1><div class="product-category">${genderText} ${product.category}</div><div class="product-price mt-3">PKR ${product.price.toLocaleString()}<span class="old-price">PKR ${product.originalPrice.toLocaleString()}</span></div><div class="rating mt-2">${stars}</div><p class="mt-3">${product.desc}</p><div class="mt-3"><label class="fw-bold">Select Size:</label><div class="d-flex gap-2 mt-2 flex-wrap"><span class="size-option" data-size="XS">XS</span><span class="size-option" data-size="S">S</span><span class="size-option" data-size="M">M</span><span class="size-option" data-size="L">L</span><span class="size-option" data-size="XL">XL</span><span class="size-option" data-size="XXL">XXL</span></div></div><div class="mt-3"><label class="fw-bold">Quantity:</label><div class="quantity-selector mt-2"><button class="quantity-btn" id="decQty">-</button><span id="selectedQty" class="fw-bold fs-5 mx-3">1</span><button class="quantity-btn" id="incQty">+</button></div></div><div class="mt-4"><button class="add-to-cart" id="addToCartBtn" style="width: auto; padding: 0.8rem 2rem;">ADD TO CART</button><button class="add-to-cart ms-3" id="buyNowBtn" style="background: #c49a6c; width: auto; padding: 0.8rem 2rem;">BUY NOW</button></div></div></div>`;
        let qty = 1, selectedSize = null;
        document.getElementById('incQty')?.addEventListener('click', () => { qty++; document.getElementById('selectedQty').innerText = qty; });
        document.getElementById('decQty')?.addEventListener('click', () => { if(qty > 1) { qty--; document.getElementById('selectedQty').innerText = qty; } });
        document.querySelectorAll('.size-option').forEach(el => { el.addEventListener('click', function() { document.querySelectorAll('.size-option').forEach(s => s.classList.remove('selected')); this.classList.add('selected'); selectedSize = this.getAttribute('data-size'); }); });
        document.getElementById('addToCartBtn')?.addEventListener('click', () => { addToCart(product.id, qty, selectedSize); });
        document.getElementById('buyNowBtn')?.addEventListener('click', () => { addToCart(product.id, qty, selectedSize); window.location.href = 'checkout.html'; });
    } else { container.innerHTML = `<div class="text-center py-5"><i class="fas fa-exclamation-triangle fa-3x text-danger"></i><h3>Product Not Found</h3><a href="shop.html" class="btn-primary-custom">Back to Shop</a></div>`; }
}

// ========== CHECKOUT PAGE ==========
function loadOrderSummary() {
    const cart = getCart();
    const container = document.getElementById('orderItems');
    if(!container) return;
    let total = 0, html = '';
    cart.forEach(item => { const itemTotal = item.price * item.quantity; total += itemTotal; html += `<div class="d-flex justify-content-between mb-2"><span>${item.name} x ${item.quantity}</span><span>PKR ${itemTotal.toLocaleString()}</span></div>`; });
    container.innerHTML = html;
    document.getElementById('orderTotal').innerText = total.toLocaleString();
}

function setupCheckoutValidation() {
    const form = document.getElementById('checkoutForm');
    if(!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const name = document.getElementById('fullName')?.value || '';
        if(!validateName(name)) { document.getElementById('nameError').innerText = 'Only alphabets allowed'; isValid = false; } else { document.getElementById('nameError').innerText = ''; }
        const phone = document.getElementById('phone')?.value || '';
        if(!validatePhone(phone)) { document.getElementById('phoneError').innerText = '11 digits only'; isValid = false; } else { document.getElementById('phoneError').innerText = ''; }
        const email = document.getElementById('email')?.value || '';
        if(!validateEmail(email)) { document.getElementById('emailError').innerText = 'Enter valid email'; isValid = false; } else { document.getElementById('emailError').innerText = ''; }
        const address = document.getElementById('address')?.value || '';
        if(!validateAddress(address)) { document.getElementById('addressError').innerText = 'Enter complete address'; isValid = false; } else { document.getElementById('addressError').innerText = ''; }
        const city = document.getElementById('city')?.value || '';
        if(city === "") { document.getElementById('cityError').innerText = 'Select city'; isValid = false; } else { document.getElementById('cityError').innerText = ''; }
        const postalCode = document.getElementById('postalCode')?.value || '';
        if(!validatePostalCode(postalCode)) { document.getElementById('postalCodeError').innerText = '5-6 digits only'; isValid = false; } else { document.getElementById('postalCodeError').innerText = ''; }
        if(isValid) { const total = getCartTotal(); showToast(`✅ Order placed! Total: PKR ${total.toLocaleString()}. Thank you!`); localStorage.removeItem('onlineCart'); updateCartCount(); setTimeout(() => { window.location.href = 'index.html'; }, 2000); }
        else { showToast("❌ Please fill all fields correctly!", true); }
    });
}

// ========== FEEDBACK PAGE ==========
let feedbacks = [
    { name: "Ahmed Raza", rating: 5, message: "Amazing quality products! Highly recommended!" },
    { name: "Sana Khan", rating: 4, message: "Good collection. Prices are reasonable." },
    { name: "Bilal Ahmed", rating: 5, message: "Best online store. Customer support is helpful." }
];

function displayFeedbacks() {
    const container = document.getElementById('feedbacksList');
    if(!container) return;
    let html = '';
    feedbacks.forEach(fb => { const stars = '★'.repeat(fb.rating) + '☆'.repeat(5 - fb.rating); html += `<div class="feedback-card"><div class="feedback-rating">${stars}</div><p>${fb.message}</p><div class="feedback-name">- ${fb.name}</div></div>`; });
    container.innerHTML = html;
}

function setupFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    if(!form) return;
    document.querySelectorAll('.star-rating i').forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            document.getElementById('feedbackRating').value = rating;
            document.querySelectorAll('.star-rating i').forEach((s, idx) => { if(idx < rating) { s.classList.remove('far'); s.classList.add('fas'); s.classList.add('active'); } else { s.classList.remove('fas'); s.classList.remove('active'); s.classList.add('far'); } });
        });
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('feedbackName').value;
        const rating = parseInt(document.getElementById('feedbackRating').value);
        const message = document.getElementById('feedbackMessage').value;
        let valid = true;
        if(!validateName(name)) { document.getElementById('feedbackNameError').innerText = 'Only alphabets allowed'; valid = false; } else { document.getElementById('feedbackNameError').innerText = ''; }
        if(rating === 0) { showToast("Please select a rating!", true); valid = false; }
        if(message.length < 5) { document.getElementById('feedbackMessageError').innerText = 'Write at least 5 characters'; valid = false; } else { document.getElementById('feedbackMessageError').innerText = ''; }
        if(valid) { feedbacks.unshift({ name: name, rating: rating, message: message }); displayFeedbacks(); showToast("✅ Thank you for your feedback!"); form.reset(); document.getElementById('feedbackRating').value = 0; document.querySelectorAll('.star-rating i').forEach(s => { s.classList.remove('fas', 'active'); s.classList.add('far'); }); }
    });
}

// ========== NEWSLETTER ==========
function setupNewsletter() {
    const btn = document.getElementById('subscribeBtn');
    if(!btn) return;
    btn.addEventListener('click', () => {
        const email = document.getElementById('newsletterEmail').value;
        if(validateEmail(email)) { showToast("✅ Subscribed successfully!"); document.getElementById('newsletterEmail').value = ""; document.getElementById('newsletterError').innerText = ''; }
        else { document.getElementById('newsletterError').innerText = 'Enter valid email!'; setTimeout(() => document.getElementById('newsletterError').innerText = '', 3000); }
    });
}

// ========== SEARCH SETUP ==========
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if(!searchInput) return;
    searchInput.addEventListener('input', function(e) {
        const searchTerm = this.value;
        if(window.location.pathname.includes('shop.html')) {
            searchShopProducts(searchTerm);
        } else {
            searchHomeProducts();
        }
    });
}

// ========== CATEGORY FILTERS FOR SHOP PAGE ==========
function setupCategoryFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterShopByCategory(filter);
        });
    });
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    setupNewsletter();
    setupSearch();
    const path = window.location.pathname;
    
    if(path.includes('index.html') || path === '/' || path === '') {
        loadHomeProducts();
        if(typeof Swiper !== 'undefined' && document.querySelector('.hero-slider')) {
            new Swiper('.hero-slider', { loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { el: '.swiper-pagination', clickable: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
        }
    }
    else if(path.includes('shop.html')) {
        loadAllShopProducts();
        setupCategoryFilters();
    }
    else if(path.includes('product-detail.html')) { loadProductDetail(); }
    else if(path.includes('cart.html')) { loadCartPage(); }
    else if(path.includes('checkout.html')) { loadOrderSummary(); setupCheckoutValidation(); }
    else if(path.includes('feedback.html')) { displayFeedbacks(); setupFeedbackForm(); }
});