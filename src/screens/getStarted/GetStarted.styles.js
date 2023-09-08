import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // border: "5px solid green",
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerTitle: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  bannerText: {
    color: "#fff",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "10%",
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "white",
  },
});

export default styles;
