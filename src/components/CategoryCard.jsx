import { useDispatch } from 'react-redux';
import '../styles/CategoryCard.css'
import { setCategory } from '../store/slices/filtersSlice';
import { useNavigate } from 'react-router-dom';
import getNavigateUrl from '../hooks/useNavigateUrl';

const CategoryCard = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function HandleClick() {
    dispatch(setCategory(category.category))
    navigate(getNavigateUrl({ category: category.category }))
  };

  return (
    <div className="category-card" onClick={HandleClick}>
      <img src={category.src} className='category-image' />
    </div>
  );
};

export default CategoryCard;