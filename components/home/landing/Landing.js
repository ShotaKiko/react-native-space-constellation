import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";

import styles from "./Landing.style";
import { ImageBackground } from "react-native";

import background from "../../../assets/background.jpeg"
import LaunchesListDataLayer from "../launchesList/LaunchesList.dataLayer";

function Landing () {
  const [searchInput, setSearchInput] = useState("");

function SearchInputHandler(searchText) {
  setSearchInput(searchText)
}

const searchFilterFunction = (text) => {
  if(text){  
      const newData = data.filter(item => {
          const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      })
      setFilteredData(newData);
  } else {
      setFilteredData(data);
  }
}

  // Add styles
  return (
    <View style={styles.container}>
      <View style={styles.bannerStrip}>
      <ImageBackground
          source={background}
          style={styles.background}
        > 
        <Text style={styles.bannerTitle}>SpaceX Launches</Text>
        <Text style={styles.bannerText}>Explore past launches into space</Text>
        </ImageBackground>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchInput}
            onChangeText={(text) => SearchInputHandler(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          {/* TODO: of corresponding image */}
          {/* <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          /> */}
        </TouchableOpacity>
      </View>

     <LaunchesListDataLayer style={styles.listContent} />
    </View>
  );
};

export default Landing;