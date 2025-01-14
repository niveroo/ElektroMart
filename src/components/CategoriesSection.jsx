import { useSelector } from "react-redux";
import CategoriesList from "./CategoriesList";

const CategoriesSection = () => {
    const categoriesSlice = useSelector((state) => state.categories);

    return (
        <div className="categories-section">
            <CategoriesList categories={categoriesSlice.categories} />
        </div>
    );
};

export default CategoriesSection;