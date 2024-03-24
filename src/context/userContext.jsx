import { createContext, useContext, useEffect, useState } from "react";
import supabase from "config/supabase";
const userContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  function setUserState(user) {
    setUser(user);
    setLoading(false);
  }

  async function handleLogin(email, password) {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw console.log(error);
      }
      setUserState(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLogout() {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw console.log(error);
      }
      setUserState(null);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(function () {
    async function fetchUser() {
      try {
        setLoading(true);
        const session = await supabase.auth.getSession();
        setUserState(session?.data?.session?.user || null);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ user, loading, handleLogin, handleLogout }}>
      {children}
    </userContext.Provider>
  );
}

function useUser() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
