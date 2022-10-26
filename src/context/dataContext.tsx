// 1. Import hook
import { createContext, useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { Products } from "../@types";

// 2. Create Context / Store

interface ProductsContext {
  products: Products | null
}
export const ProductsContext = createContext <ProductsContext>({products: null});


// 3. Create provider
export const ProductsContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  // 4. Move state and function
  let api: string = `https://fakestoreapi.com/products`;

  // const [products, setProducts] = useState(null);
  const [products, setProducts] = useState<Products|null >(null);
  

  useEffect(() => {
    (async function () {
      let data = await fetch(api);
      let response = await data.json();
      setProducts(response);
      console.log("response", response);
    })();
  }, []);

  //Modify context data from component

  // 5. Return the provide with its value and inject children component

  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
