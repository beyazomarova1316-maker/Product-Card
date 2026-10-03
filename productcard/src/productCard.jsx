function ProductCard(props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-4">
        {props.name}
      </h2>

      <p className="text-gray-600 mt-2">
        Category: {props.category}
      </p>

      <p className="text-green-600 font-bold text-lg mt-2">
        Price: ${props.price}
      </p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;