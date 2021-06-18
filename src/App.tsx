import React from 'react';
//redux
import { Provider } from 'react-redux';
import store from './store';
//components
import CardsWrapper from './components/CardsWrapper';
import HeaderComponent from './components/HeaderComponent';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HeaderComponent />
      <CardsWrapper />
    </Provider>
  );
}

export default App;
