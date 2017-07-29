/**
 * Deviation React Native App for both Android/iOS
 * @flow
 */
import React, { Component } from 'react';
import {createRootNavigator} from './views/AppNavigator';
import { Provider } from 'react-redux';
import { store, persistor } from './store/configureStore';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

//   componentWillMount() {
//     //AsyncStorage.clear(()=>{
//     persistor(() => {
//       onPersistComplete(store, this.setRehydrated, this.setSignIn);    
//  	  });
//     //});
//   }

  setRehydrated = () => {
      this.setState({ rehydrated: true });
  };

  setSignIn = (status) => {
    this.setState({ signedIn: status });
  };

  render() {
   // const { signedIn, rehydrated } = this.state;
    const Layout = createRootNavigator(); 
      return(
            <Provider store={store} persistor={persistor}>
              <Layout />
            </Provider>
      );
}
}