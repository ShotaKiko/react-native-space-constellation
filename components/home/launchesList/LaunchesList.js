import { View, FlatList } from "react-native";

import styles from "./LaunchesList.style";
import LaunchCard from "./components/LaunchCard";

function LaunchesList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        // Flatten obj here to avoid double?
        data={props.launches.launches}
        renderItem={({ item }) => <LaunchCard props={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default LaunchesList;
