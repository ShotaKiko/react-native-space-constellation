import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    border: "1px solid blue",
    display:"flex",
    justifyContent:"space-evenly"
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    border: "1px solid red",
  },
  searchWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  bannerStrip: {
    width:"100%",
    display: "flex",
  },
  bannerTitle: {
    color:"#fff",
    fontSize: "2em",
  },
  bannerText: {
    color:"#fff"
  },
});

export default styles;