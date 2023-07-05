
const getAllUsers = async () => {

const url = "http://localhost:3000/users";

	const response = await fetch (url);
	const users = await response.json();

return users;
};

export default getAllUsers;