import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    border: "5px solid blue",
    display:"flex",
    flex: 1,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
  },
  searchWrapper: {
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
  },
  tabsContainer: {
    width: "100%",
  },
  background: {
    flex: 2
  },
  bannerStrip: {
  },
  bannerTitle: {
    color:"#fff",
    fontSize: "2em",
  },
  bannerText: {
    color:"#fff"
  },
  listContent: {
    flex: 3,
  }
});

export default styles;