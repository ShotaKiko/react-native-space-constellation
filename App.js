import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LaunchDetails from "./src/screens/details/LaunchDetails";
import GetStarted from "./src/screens/getStarted/GetStarted";
import Landing from "./src/screens/landing/Landing";

const client = new ApolloClient({
  uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={GetStarted} />
          <Stack.Screen
            name="List"
            component={Landing}
            options={{ title: "Recent Launches" }}
          />
          <Stack.Screen name="Details" component={LaunchDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
