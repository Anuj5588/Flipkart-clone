
 import { createContext, useContext, useState } from 'react';


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Anuj"); // Example state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};



