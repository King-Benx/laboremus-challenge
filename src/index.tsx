import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {ComingSoon, CreateUserScreen, WelcomeScreen} from './scenes';

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create Profile"
          component={CreateUserScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Coming Soon"
          component={ComingSoon}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
