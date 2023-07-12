import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AuthStack from './navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#045e87"
          barStyle='default' />
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
