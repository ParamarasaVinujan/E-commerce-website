import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, password) => {
    // Replace with real logic
    setUser({ email, firstName: 'John', lastName: 'Doe' });
    setIsAuthenticated(true);
    return true;
  };

  const register = async (userData) => {
    // Replace with real logic
    setUser(userData);
    setIsAuthenticated(true);
    return true;
  };

  return (
    <UserContext.Provider value={{ user, login, register, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
