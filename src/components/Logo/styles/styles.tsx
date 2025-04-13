import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#6c7e9a",
    borderTopEndRadius: 50,
    borderBottomLeftRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#3f526c",
    width: "80%",
    position: "absolute",
    top: 60,
  },
  title1: {
    fontSize: 38,
    color: "#fafafa",
  },
  title2: { fontSize: 30, color: "#6d9ad4", fontWeight: 600 },
});
