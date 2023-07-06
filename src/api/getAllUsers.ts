
const getAllUsers = async () => {

    try {
        const url = "http://localhost:3000/users";
        
            const response = await fetch (url);
            const users = await response.json();
        
        return users;
    }
    catch {
        throw new Error ("Error while getting users from JSON-server API");
    }
};

export default getAllUsers;