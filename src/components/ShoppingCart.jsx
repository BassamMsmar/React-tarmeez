import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleDecreaseClick(productId) {
    let newListProducts = [];
    for (let product of products) {
      if (product.id === productId) {
        if (product.count > 1) {
          let newPorduct = { ...product, count: product.count - 1 };
          newListProducts.push(newPorduct);
        }
      } else {
        newListProducts.push(product);
      }
    }
    setProducts(newListProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            className="btn btn-success m-2"
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
