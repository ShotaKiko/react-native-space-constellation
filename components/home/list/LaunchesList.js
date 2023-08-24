import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  
  import styles from "./LaunchesList.style";
  
  
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
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          // TODO: Define this in constants so there are no random values
          contentContainerStyle={{ columnGap: .5 }}
          horizontal
        />
        </View>
    );
  };
  
  export default LaunchesList;