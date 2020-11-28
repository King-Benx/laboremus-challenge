import React, {FC} from 'react';
import {Routes} from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './data/store';

const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
