import React from 'react';
//redux
import { Provider } from 'react-redux';
import store from './store';
//components
import CardsWrapper from './components/CardsWrapper'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CardsWrapper />
    </Provider>
  );
}

export default App;
