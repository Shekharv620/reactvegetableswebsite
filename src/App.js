// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
//import store from './TomatoMan/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './TomatoMan/Store';
import Phone from './TomatoMan/Phone';
import Routing from './TomatoMan/Routing';
function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routing />
        </div>
      </PersistGate>
    </Provider>

  );
}

export default App;
