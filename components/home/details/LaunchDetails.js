import { View, Text, Button } from "react-native";

import styles from "./LaunchDetails.styles";

function LaunchDetails({ navigation, props }) {
  return (
    <View style={styles.container}>
      <Text>{props.mission_name}</Text>
      <Text>{props.details}</Text>
      <Text>Additional Launch Information</Text>
      <View style={styles.content}>
        <Text>Rocket details</Text>
        <Text>{props.rocket.rocket_name}</Text>
        <Text>{props.rocket.rocket_type}</Text>
      </View>
      <Button
        title="Back to Home"
        // TODO: move on press logic to utils file
        // generateOnPress
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default LaunchDetails;
