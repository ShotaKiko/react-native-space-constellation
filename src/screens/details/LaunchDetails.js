import { View, Text, Button, Image } from "react-native";

import styles from "./LaunchDetails.styles";
import falconRocketFamily from "../../../assets/falconFamily.png";

function LaunchDetails({ route, navigation }) {
  const item = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.mission}>Mission: {item.mission_name}</Text>
        <Text style={styles.description}>Description: {item.details}</Text>
        <Text style={styles.rocketName}>
          Rocket Name: {item.rocket.rocket_name}
        </Text>
        <View>
          <Image style={styles.image} source={falconRocketFamily} />
        </View>

        <Button
          title="Back to List"
          onPress={() => navigation.navigate("List")}
        />
      </View>
    </View>
  );
}

export default LaunchDetails;
