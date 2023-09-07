import { View, FlatList } from "react-native";

import styles from "./LaunchesList.style";
import LaunchCard from "./components/LaunchCard";

function LaunchesList({ navigation, launches }) {
  console.log("LIST", navigation);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        // Flatten obj here to avoid double?
        data={launches.launches}
        renderItem={({ item }) => (
          <LaunchCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default LaunchesList;
