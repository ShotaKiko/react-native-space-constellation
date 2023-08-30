import {
    View,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  
  import styles from "./LaunchesList.style";
import LaunchCard from "../details/LaunchCard";
  
  
  function LaunchesList(list) {
    return (
        <View style={styles.container}>
        {/* TODO: Is flat list more appropriate here than mapping */}
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity
                // TODO: on press that routes to launch details page
              
            >
              <LaunchCard props={item}>{item}</LaunchCard>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          // TODO: Define this in constants so there are no random values
          horizontal
        />
        </View>
    );
  };
  
  export default LaunchesList;