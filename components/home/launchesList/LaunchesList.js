import { View, FlatList } from "react-native";

import styles from "./LaunchesList.style";
import LaunchCard from "./components/LaunchCard";

function LaunchesList({ launches }) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={launches.launches}
        renderItem={({ item }) => <LaunchCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default LaunchesList;
