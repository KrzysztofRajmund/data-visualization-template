import React from 'react';
//redux
import { Provider } from 'react-redux';
import store from './store';
//components
import HeaderComponent from './components/HeaderComponent';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HeaderComponent />
    </Provider>
  );
}

export default App;
