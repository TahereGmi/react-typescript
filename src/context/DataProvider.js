import React, { useState, createContext } from "react";

export const Context = createContext();
export const Consumer = Context.Consumer

const DataProvider = ({ children }) => {
  const [ cart, setCart ] = useState({ item: 'test' })
//   const [ category, setCategories ] = useState({})

	return(
		<Context.Provider 
			value={{ 
				cart, setCart
			}}>
			{children}
		</Context.Provider>
	)
}

export default DataProvider