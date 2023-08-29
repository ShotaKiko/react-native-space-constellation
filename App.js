import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import Landing from './components/home/landing/Landing';


const client = new ApolloClient({
  uri: 'https://main--spacex-l4uc6p.apollographos.net/graphql',
  cache: new InMemoryCache(),
});

// const GET_LOCATIONS = gql`
//   query Launches {
//   launches {
//     id
//     details
//     mission_name
//     rocket {
//       rocket_name
//       rocket_type
//     }
//   }
//   payloads {
//     payload_mass_kg
//     payload_mass_lbs
//   }
// }
// `;

// const { loading, error, data } = useQuery(GET_LOCATIONS);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Landing/>
      </View>
  </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border:"1px solid green",
  },
});
