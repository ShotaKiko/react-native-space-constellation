import { useQuery, gql } from '@apollo/client';
import {
    View,
    Text,
  } from "react-native";
import LaunchesList from './LaunchesList';

const GET_LAUNCHES = gql`
  query Launches {
    launches {
      id
      details
      mission_name
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
        console.log(data)
        // TODO: Add validation lodash - get function
        return (
          <View>
            <Text>Recent Launches</Text>
            <LaunchesList list={data} />
          </View>
        )
    }
}

export default LaunchesListDataLayer