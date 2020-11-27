import React, {FC} from 'react';
import {Routes} from './navigation';
import {NavigationContainer} from '@react-navigation/native';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
