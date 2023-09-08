import { LinearGradient } from "expo-linear-gradient";
import filter from "lodash.filter";
import { useState, useEffect } from "react";
import { View, FlatList, TextInput } from "react-native";

import styles from "./LaunchesList.style";
import LaunchCard from "../launchCard/LaunchCard";

function LaunchesList({ launches }) {
  const [searchInput, setSearchInput] = useState("");
  const [fullData, setFullData] = useState({});
  const [data, setData] = useState({});

  function handleSearch(searchText) {
    setSearchInput(searchText);
    //modify list
    const formattedQuery = searchText.toLowerCase();
    const filteredData = filter(fullData, (launch) => {
      return contains(launch, formattedQuery);
    });
    setData(filteredData);
  }

  const contains = ({ mission_name, rocket }, query) => {
    if (
      mission_name.toLowerCase().includes(query) ||
      rocket.rocket_name.toLowerCase().includes(query)
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setData(launches.launches);
    setFullData(launches.launches);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(10,0,0,1)", "transparent"]}
        style={styles.background}
      />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchInput}
          onChangeText={(text) => handleSearch(text)}
          placeholder="Search for a specific SpaceX launch"
          placeholderTextColor="#ccc"
        />
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({ item }) => <LaunchCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default LaunchesList;
