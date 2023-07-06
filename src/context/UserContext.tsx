import { FC, createContext, useState } from "react";
import { UserProps, Props } from "../types/types";


const UserContext = createContext<{ users: UserProps[], changeUsers: (allUsers: UserProps[]) => void}>( { users: [], changeUsers: () => {} } );


export const UserProvider: FC<Props> = ({children}) => {

    const [users, setUsers] = useState<UserProps[]>([]);

    const changeUsers = (newUser: UserProps[]) => {
        setUsers (newUser);
    };

  return (
    <>
        <UserContext.Provider value = { {users, changeUsers} }>
            {children}
        </UserContext.Provider>
    </>
  );
};

export default UserContext;