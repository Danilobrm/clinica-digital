import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './screens/Welcome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Aurora from './screens/Aurora';
import Home from './screens/Home';
import Schedule from './screens/Schedule';
// import {GlobalStylesProvider} from './GlobalStylesContext';
// import {whiteLabelLoad} from './services/serviceWhitelabel';
// import {GlobalStylesProvider} from './GlobalStylesContext';
// import authenticate from './modules/auth/serviceAuth';
// import {whiteLabelLoad} from './services/serviceWhitelabel';
// import {globalStyle} from './globalStyle';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // await whiteLabelLoad('defaultwl').then(item => {
  //   globalStyle(item.colors);
  // });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Aurora" component={Aurora} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
