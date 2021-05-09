import './App.css';
import VegetableList from './Tomatoman1/VegetableList';
import Cards from './Tomatoman1/Cards';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {  Link } from 'react-router-dom';
import Profile from './Tomatoman1/Profile';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import History from './Tomatoman1/History';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './Tomatoman1/Store';
import Phone from './Tomatoman1/Phone';
import { NavBar } from './Tomatoman1/NavBar';

function App() {
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div className="App">
    <NavBar/>
       <Router>
        <div>
        
          <Switch>
          <Route exact path='/phone' component={Phone}></Route>
            <Route exact path='/' component={VegetableList}></Route>
            <Route path='/Cards' component={Cards}></Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/history' component={History}></Route>
          </Switch>
        </div>
      </Router> 
      </div>
      </PersistGate>
      </Provider>
  );
}

export default App;
