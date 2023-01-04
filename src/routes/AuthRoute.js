import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LOGIN} from '../constants/routeName';
import LoginScreen from '../screens/LoginScreen';

const AuthRoute = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator 
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      
  
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
