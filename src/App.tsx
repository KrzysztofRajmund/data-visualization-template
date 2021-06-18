import React from 'react';
//redux
import { Provider } from 'react-redux';
import store from './store';
//components
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
