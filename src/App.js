import React, {Component} from 'react'; 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'; 
import  { FB_APIKEY, FB_AUTHDOMAIN, FB_DATABASEURL, FB_PROJECTID, FB_STORAGEBUCKET, FB_MESSAGINGSENDERID} from '../config/constants.js';
import LoginForm from './components/LoginForm'; 

class App extends Component{
  componentWillMount(){
  const config = {
    apiKey: FB_APIKEY,
    authDomain: FB_AUTHDOMAIN,
    databaseURL: FB_DATABASEURL,
    projectId: FB_PROJECTID,
    storageBucket: FB_STORAGEBUCKET,
    messagingSenderId: FB_MESSAGINGSENDERID
  }; 

  firebase.initializeApp(config); 

  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (  <Provider store ={store}>
    <LoginForm/>
        </Provider> 
    ); 
  }
}

export default App; 