import { View, Text, Button } from "react-native";

import styles from "./LaunchDetails.styles";

function LaunchDetails({ route, navigation }) {
  const item = route.params;
  console.log(item);
  return (
    <View style={styles.container}>
      <Text>{item.mission_name}</Text>
      <Text>{item.details}</Text>
      <Text>Additional Launch Information</Text>
      <View style={styles.content}>
        <Text>Rocket details</Text>
        <Text>{item.rocket.rocket_name}</Text>
        <Text>{item.rocket.rocket_type}</Text>
      </View>
      <Button
        title="Back to Home"
        // TODO: move on press logic to utils file
        // generateOnPress
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
}

export default LaunchDetails;
