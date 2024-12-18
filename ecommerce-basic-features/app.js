// Dummy data array
let products = [
    { id: 1, name: "SVESTONS MARTWATCH", price: "<del >$30</del> $20", description: "46 Years Experience - Highlighting the long-term expertise of the company.", image: "./image/image.png", image: "./image/image.png" },
    { id: 2, name: "NITRO SMARTWATCH", price: "<del >$40</del> $30", description: "46 Years Experience - Highlighting the long-term expertise of the company.", image: "./image/image.png", image: "./image/image2.png" },
    { id: 3, name: "SVESTONS MARTWATCH", price: "<del >$50</del> $40", description: "46 Years Experience - Highlighting the long-term expertise of the company.", image: "./image/image.png" },
    { id: 4, name: "NITRO SMARTWATCH", price: "<del >$60</del> $50", description: "46 Years Experience - Highlighting the long-term expertise of the company.", image: "./image/image.png", image: "./image/image2.png" }
    
];

// Function to render product cards
// Is function ka waqsad product cards ko render karna hai
function renderProductCards() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products.map(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p class="price">${product.price}</p>
            <p>${product.description}</p>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;

        container.appendChild(productCard);
    });
}

// Function to delete a product
// Is function ka waqsad product delete karna hai
function deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
    renderProductCards();
}

// Initial render karna products ka
renderProductCards();
