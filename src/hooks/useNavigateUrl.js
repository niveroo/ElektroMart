import { useSelector } from "react-redux";

export function useNavigateUrl() {
    const filters = useSelector((state) => state.filters);

    const genNavigateUrl = () => {
        console.log("filters", JSON.stringify(filters));
        const queryParams = new URLSearchParams();

        if (filters.name) {
            queryParams.set('name', filters.name);
        }

        if (filters.minPrice) {
            queryParams.set('minprice', filters.minPrice);
        }

        if (filters.maxPrice) {
            queryParams.set('maxprice', filters.maxPrice);
        }

        if (filters.category) {
            queryParams.set('category', filters.category);
        }

        return (`/search?${queryParams.toString()}`);
    };

    return genNavigateUrl;
};