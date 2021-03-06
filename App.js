import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import Home from './src/components/Home';



class App extends React.Component{

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDqtQawSfGwSN1sJ5xEb9O-5FgtBCnGzJw',
      authDomain: 'auth-1c9b9.firebaseapp.com',
      databaseURL: 'https://auth-1c9b9.firebaseio.com',
      projectId: 'auth-1c9b9',
      storageBucket: '',
      messagingSenderId: '283135002309',
      appId: '1:283135002309:web:00194e29927fc7ce' 
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }


  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
          <Home />
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
