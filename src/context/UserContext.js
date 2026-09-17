import {
  createContext,
  useState
} from 'react';


export const UserContext = createContext();


function UserProvider({ children }) {

  const savedUser = localStorage.getItem("user");


  const [user, setUser] = useState(
    savedUser
      ? JSON.parse(savedUser)
      : null
  );


  return (

    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >

      {children}

    </UserContext.Provider>

  );
}


export default UserProvider;