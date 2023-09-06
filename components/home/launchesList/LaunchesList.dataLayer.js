import { useQuery, gql } from "@apollo/client";
import ErrorIcon from "@mui/icons-material/Error";
import { View, Text, ActivityIndicator } from "react-native";

import LaunchesList from "./LaunchesList";

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
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (error) {
    console.log(error);
    return (
      <View>
        <ErrorIcon />
        <Text>Error retrieving data</Text>
      </View>
    );
  }
  if (data) {
    // TODO: Add validation lodash - get function
    return <LaunchesList launches={data} />;
  }
}

export default LaunchesListDataLayer;
