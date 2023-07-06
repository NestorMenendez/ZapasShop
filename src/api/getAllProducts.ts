
const getAllProducts = async () => {
	try{
		const response = await fetch (import.meta.env.VITE_API_URL);
		const products = await response.json();

	return products;
	}

	catch {
		throw new Error ("Error while getting products from JSON-server API");
	}

};

export default getAllProducts;