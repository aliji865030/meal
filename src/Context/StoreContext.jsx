import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [fav, setFav] = useState([]);

  const addToFav = (item) => {
    setFav((prevFav) => [...prevFav, item]);
  };

  const removeFromFav = (idMeal) => {
    setFav((prevFav) => prevFav.filter(item => item.idMeal !== idMeal));
  };

  const contextValue = {
    fav,
    addToFav,
    removeFromFav,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;