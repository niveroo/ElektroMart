import CategoryCard from "./CategoryCard";
import '../styles/CategoriesList.css'

const CategoriesList = ({ categories }) => {

    return (
        <div className="categories-list">
            {categories.length ? (
                categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default CategoriesList;