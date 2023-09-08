import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mission: {
    fontSize: 32,
    marginBottom: 10,
  },
  description: {
    fontStyle: "italic",
    fontSize: 22,
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 20,
    height: 400,
    maxWidth: "70%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rocketName: {
    fontSize: 28,
  },
  image: {
    marginVertical: 20,
    //OG dimension: 2000×1253
    // TODO: Look into how to preserve aspect ration as you scale up/down
    width: 1000,
    height: 626.5,
  },
});

export default styles;
