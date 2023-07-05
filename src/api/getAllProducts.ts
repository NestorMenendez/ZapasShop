
const getAllProducts = async () => {

	const response = await fetch (import.meta.env.VITE_API_URL);
	const products = await response.json();

return products;
};

export default getAllProducts;