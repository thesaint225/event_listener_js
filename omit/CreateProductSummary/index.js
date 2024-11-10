var printProductSummary = function (product) {
    console.log("".concat(product.name, "=").concat(product.price));
};
// Example usage
var summary = {
    name: "smartphone",
    price: 7999,
};
printProductSummary(summary);
