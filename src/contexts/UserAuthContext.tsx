import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface UserAuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name: string) => boolean;
  logout: () => void;
}

const UserAuthContext = createContext<UserAuthContextType | undefined>(undefined);

const USERS_KEY = "celestibia_users";
const CURRENT_USER_KEY = "celestibia_current_user";

interface StoredUser {
  id: string;
  email: string;
  password: string;
  name: string;
}

const getStoredUsers = (): StoredUser[] => {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
};

const saveStoredUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const users = getStoredUsers();
    const foundUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    
    if (foundUser) {
      const loggedInUser: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };
      setUser(loggedInUser);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string, name: string): boolean => {
    const users = getStoredUsers();
    const existingUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    
    if (existingUser) {
      return false;
    }

    const newUser: StoredUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
    };
    
    users.push(newUser);
    saveStoredUsers(users);
    
    const loggedInUser: User = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };
    setUser(loggedInUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <UserAuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within UserAuthProvider");
  }
  return context;
};
