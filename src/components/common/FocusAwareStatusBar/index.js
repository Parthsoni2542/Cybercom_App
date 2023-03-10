import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';

const FocusAwareStatusBar = props => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;
