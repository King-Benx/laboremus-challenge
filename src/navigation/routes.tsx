import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  CreateUserScreen,
  WelcomeScreen,
  Profile,
  AddFarmerScreen,
} from '../scenes';
import {IconComponent} from '../components/atoms';
import colors from '../assets/styles/colors';

const Stack = createStackNavigator();

const stackRoutes = () => {
  return (
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
        name="Home"
        component={tabRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const tabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.LOGO_COLOR,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <IconComponent
              type="ionicons"
              name="ios-home"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Farmer"
        component={AddFarmerScreen}
        options={{
          tabBarLabel: 'Add Farmer',
          tabBarIcon: ({color, size}) => (
            <IconComponent
              type="font-awesome"
              name="plus-square"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <IconComponent
              type="font-awesome"
              name="user-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default stackRoutes;
