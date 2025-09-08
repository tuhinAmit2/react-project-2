export function sortProducts(products) {
    return products.sort((a, b) => a.price.localeCompare(b.price));
}