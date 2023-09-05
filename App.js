import { StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Landing from './components/home/landing/Landing';
import LaunchDetails from './components/home/details/LaunchDetails';


const client = new ApolloClient({
  uri: 'https://main--spacex-l4uc6p.apollographos.net/graphql',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Landing} options={{ title: 'Recent Launches' }} />
          <Stack.Screen name="Details" component={LaunchDetails} />
        </Stack.Navigator>
      </NavigationContainer>
  </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
