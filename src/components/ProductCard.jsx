import './ProductCard.css'
const ProductCard = ({ product }) => {
  function HandleClick() {
    console.log("clicked")
  };

  return (
    <div className="product-card" onClick={HandleClick}>
      <img src={product.src} height="100" />
      <h2>{product.name}</h2>
      <div>{product.description}</div>
      <div>Price: {product.price} PLN</div>
      {/* <button>Add to cart</button> */}
    </div>
  );
};

export default ProductCard;