import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;