type Product = {
  id: number;
  name: string;
  price: number;
};

// using Omit  to create a type without the "id" field
type NewProduct = Omit<Product, "id">;

// create a new instance of NewProduct

const newProduct: NewProduct = {
  name: "laptop",
  price: 1500,
};

console.log(`${newProduct.name} = ${newProduct.price}`);
