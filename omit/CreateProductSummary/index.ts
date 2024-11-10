type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type ProductSummary = Omit<Product, "id" | "description">;

const printProductSummary = (product: ProductSummary) => {
  console.log(`${product.name}=${product.price}`);
};

// Example usage

const summary: ProductSummary = {
  name: "smartphone",
  price: 7999,
};

printProductSummary(summary);
