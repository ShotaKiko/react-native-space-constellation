import { useQuery, gql } from '@apollo/client';
import {
    View,
    Text,
  } from "react-native";
import LaunchesList from './LaunchesList';

const launchesLimit = 20;

const GET_LAUNCHES = gql`
  query Launches {
    launches(limit: ${launchesLimit}) {
      id
      details
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

function LaunchesListDataLayer() {
    const { loading, error, data } = useQuery(GET_LAUNCHES);

    if (loading) {
        return(
          // TODO: Spinner
            <View> 
                <Text>
                    Loading...
                </Text>
            </View>
        )
    } 
    if (error) {
      console.log(error)
        return(
          // TODO: Error banner/ pop over
          <View>
              <Text>
                  Error retrieving data
              </Text>
          </View>
      ) 
    }
    if (data) {
        // TODO: Add validation lodash - get function
        return (
          <View>
            <LaunchesList launches={ data } />
          </View>
        )
    }
}

export default LaunchesListDataLayer