
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { getuser } from '../redux/actions/authActions';
import AuthRoute from './AuthRoute';
import { useSelector, useDispatch } from 'react-redux';
import AppNavigator from './AppNavigator';
import { ActivityIndicator } from 'react-native-paper';
import SplashScreen from '../screens/SplashScreen';

export const AppNavContainer = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true)
  const state = useSelector(state => state.authReducers)
  const [authLoaded, setAuthLoaded] = useState(false);
  useEffect(() => {
    authLoaded && setAuthLoaded(false);
    if (state.token=="") {
      dispatch(getuser())
     
      setisLoading(false)
    } else {
      setisLoading(false)
     
    }

  }, [state.token]);
  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {
        state.token == "" ? <AuthRoute /> : <AppNavigator />
      }
    </NavigationContainer>
  );

};
