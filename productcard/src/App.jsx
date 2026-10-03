import ProductCard from "./productCard";

function App() {

  const products = [
    {
    id: 1,
    name: "T-Shirt",
    price: 25,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
  },
  {
    id: 2,
    name: "Sneakers",
    price: 80,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  {
    id: 3,
    name: "Backpack",
    price: 45,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 30,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
  },
  {
    id: 5,
    name: "Hoodie",
    price: 55,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"
  },
  {
    id: 6,
    name: "Cap",
    price: 20,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400"
  }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}

      </div>

    </div>
  );
}

export default App;