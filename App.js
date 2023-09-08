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
          {/* // TODO: Look into using a stylesheet for these */}
          <Stack.Screen
            name="Home"
            component={GetStarted}
            options={{
              headerStyle: {
                backgroundColor: "#020208",
              },
              headerTintColor: "#ccc",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="List"
            component={Landing}
            options={{
              title: "Recent Launches",
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "#ccc",
            }}
          />
          <Stack.Screen
            name="Details"
            component={LaunchDetails}
            options={{
              title: "Recent Launches",
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "#ccc",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
