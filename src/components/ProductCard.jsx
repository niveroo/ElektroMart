import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css'
import { useDispatch } from 'react-redux';
import { setId } from '../store/slices/productSlice';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function HandleClick() {
    dispatch(setId(product.id));
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={HandleClick}>
      <img src={product.imagePath} height="100" />
      <h2>{product.name}</h2>
      <div>{product.description}</div>
      <div>Price: {product.price} PLN</div>
    </div>
  );
};

export default ProductCard;