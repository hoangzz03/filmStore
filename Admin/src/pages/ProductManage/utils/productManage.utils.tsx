export const getAllProduct = async () => {
    try {
        const response = await fetch("http://localhost:3000/products",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching", error);
    }
}
export const getProductsByCategory = async (productCategoryId: number) => {
    try {
        const response = await fetch(`http://localhost:3000/products/productCate/${productCategoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching products by category:", error);
    }
};