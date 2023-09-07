import { View, TouchableOpacity, Text } from "react-native";

import styles from "./LaunchCard.style";

function LaunchCard({ item, navigation }) {
  console.log("CARD", navigation, item);
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.mission_name}</Text>
      <Text style={styles.cardContent}>{item.details}</Text>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate("Details", item)}
      >
        <Text>More Info</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LaunchCard;
