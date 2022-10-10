// 1. Import hook
import { createContext, useState, useEffect } from "react";

// 2. Create Context / Store

export const ProductsContext = createContext();

// 3. Create provider

export const ProductsContextProvider = (props) => {
  // 4. Move state and function
  let api = `https://fakestoreapi.com/products`;
  const [products, setProducts] = useState(null)

  useEffect(() => {
    (async function () {
let data = await fetch(api);
let response = await data.json()
setProducts(response)
console.log('response', response)
    })();
  },[]);

  //Modify context data from component

  // 5. Return the provide with its value and inject children component

  return (
    <ProductsContext.Provider value={{products}}>{props.children}</ProductsContext.Provider>
  );
};