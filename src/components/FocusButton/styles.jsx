import { StyleSheet } from "react-native";
function Styles() {
  return {
    pressableBtn: {
      backgroundColor: "#B872FF",
      padding: 8,
      borderRadius: 50,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 8,
    },
    pressableBtnText: {
      color: "#021123",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
    },
  };
}

export default StyleSheet.create(Styles());
