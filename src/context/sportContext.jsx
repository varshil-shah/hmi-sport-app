import { useState, createContext, useContext } from "react";

const sportContext = createContext();

function SportProvider({ children }) {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);

  async function createSport(sport) {
    setSports((prevSports) => [...prevSports, sport]);
  }

  return (
    <sportContext.Provider value={{ sports, loading, createSport }}>
      {children}
    </sportContext.Provider>
  );
}

function useSport() {
  const context = useContext(sportContext);
  if (!context) {
    throw new Error("useSport must be used within a SportProvider");
  }
  return context;
}

export { SportProvider, useSport };
