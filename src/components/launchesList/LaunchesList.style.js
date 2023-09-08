import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#050b14",
  },
  searchContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    borderColor: "#ccc",
    borderRadius: 7,
    borderWidth: 1.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
  },
  loading: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});

export default styles;
