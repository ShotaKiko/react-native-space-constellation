import { View, TouchableOpacity, Text } from "react-native";

import styles from "./LaunchCard.style";

function LaunchCard({ props }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{props.mission_name}</Text>
      <Text style={styles.cardContent}>{props.details}</Text>

      <TouchableOpacity
        // TODO: move on press logic to a utils file
        // onPress={() => navigation.navigate("Details")}
        style={styles.cardButton}
        onPress={() => console.log("press")}
      >
        <Text>More Info</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LaunchCard;
