// Example product data
const products = [
    { id: 1, name: 'T-shirt', price: 499 },
    { id: 2, name: 'Shoes', price: 1499 }
];

// Service function to get all products
exports.getAllProducts = async () => {
    return products;
};
