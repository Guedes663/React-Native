import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Feed from './screens/Feed.js';
import DetalheVaga from './screens/DetalheVagas.js';
import DetalheEmpresa from './screens/DetalheEmpresa.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#433F8C',
        },
        headerTintColor: '#F6F6F6',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name='Feed' component={Feed} />
        <Stack.Screen name='DetalhesDaVaga' component={DetalheVaga} />
        <Stack.Screen name='DetalhesDaEmpresa' component={DetalheEmpresa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}