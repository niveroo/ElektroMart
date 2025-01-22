import { useSelector } from "react-redux";
import CategoriesList from "./CategoriesList";
import AboutUs from "./AboutUs";
import '../styles/CategoriesSection.css'

const CategoriesSection = () => {
    const categoriesSlice = useSelector((state) => state.categories);

    return (
        <div className="categories-section">
            <AboutUs />
            <CategoriesList categories={categoriesSlice.categories} />
        </div>
    );
};

export default CategoriesSection;