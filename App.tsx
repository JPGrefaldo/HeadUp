/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from "react";
 import { MainNav } from "./src/Navigators";
 import { Provider } from 'react-redux'
 
import { setupStore } from './src/Services/Store/store';

const store = setupStore()
 
 const App = () => {
   return (
	   <Provider store={store}>
			<MainNav />
	   </Provider>
   );
 };
 
 export default App;