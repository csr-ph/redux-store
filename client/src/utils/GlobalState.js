import React, { createContext, useContext } from "react";
import { Provider } from 'react-redux';

import store from './store';
//import { useProductReducer } from './reducers'

/*const StoreContext = createContext(); - don't need
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

//const useStoreContext = () => {
 // return useContext(StoreContext); - don't need these anymore, they were replaced with redux
}; */

// basically the entire area above here is no longer going to be here, it's going to be in a separate store.js file

export default function StoreProvider(props) {
  return <Provider store={store} {...props} />
}
// these couple of lines above basically replaces the original globalstate provider with redux's provider component using react.
