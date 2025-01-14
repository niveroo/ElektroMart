import '../styles/CategoryCard.css'

const CategoryCard = ({ category }) => {
  function HandleClick() {
    console.log("clicked")
  };

  return (
    <div className="category-card" onClick={HandleClick}>
      <img src={category.src} className='category-image' />
    </div>
  );
};

export default CategoryCard;