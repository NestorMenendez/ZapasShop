import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import UserContext from "../../context/UserContext"

import getAllUsers from "../../api/getAllUsers"

import { UserProps } from "../../types/types"

import "./loginForm.styles.css"


const LoginForm = () => {

    const {login} = useContext (AuthContext);

    const [userInput, setUserInput] = useState <string> ('');
    const [passInput, setPassInput] = useState <string> ('');

    const userContext = useContext (UserContext);
    const navigate = useNavigate();

    useEffect (() => {
        if (userContext.users.length === 0 ){
            console.log ("entra en el fetch");
            const getFetch = async () => {
                const allUsers: UserProps[] = await getAllUsers();
                userContext.changeUsers(allUsers);
            }
            getFetch();
        }
    },[userContext.users]);

    const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handlePassInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = userContext.users.find( user => user.user === userInput );

        if (user && user.password === passInput) {
            login(user.user);
            navigate ("/");
        }else{
            window.alert ("ATENTION: User NOT registrated.");
        };
    };

  return (
    <>
        <div className="">
            <div className="card p-5">
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <h3 className="m-2">Login</h3>
                    <input className="m-2" type="text" placeholder="Insert a username..." onChange={handleUserInputChange} />
                    <input className="m-2" type="password" value={passInput} placeholder="Confirm your password" onChange={handlePassInputChange} />
                    <button type="submit" className="btn btn-secondary m-2">Start session</button>
                </form>
            </div>
        </div>
    </>
  );
};

export default LoginForm