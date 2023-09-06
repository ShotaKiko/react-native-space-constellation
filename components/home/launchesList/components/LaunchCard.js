import { View, Button, Text } from "react-native";

import styles from "./LaunchCard.style";

function LaunchCard({ props }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{props.mission_name}</Text>
      <Text style={styles.cardContent}>{props.details}</Text>
      <Button
        title="Go to Details"
        // TODO: move on press logic to a utils file
        // onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default LaunchCard;
