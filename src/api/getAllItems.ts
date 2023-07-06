
const getAllItems = async () => {

    try {
        const url = "http://localhost:3000/items";
        
            const response = await fetch (url);
            const items = await response.json();
        
        return items;
    }
    catch {
        throw new Error ("Error while getting items from JSON-server API");
    }
};

export default getAllItems;