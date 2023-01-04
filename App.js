import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppNavContainer } from './src/routes';
import { createStore ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './src/redux'
import thunk from 'redux-thunk';
const store = createStore(combineReducers,applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavContainer />
      </SafeAreaView>
    </Provider>

  );
};
export default App;
