import { StyleSheet } from "react-native";
function Styles() {
  return {
    viewContainer: {
      backgroundColor: "#021123",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 35,
    },
    viewLogo: {
      width: 180,
      height: 50,
    },
    viewContainerCall: {
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    viewTextCall: {
      color: "#fff",
      fontSize: 25,
    },
    viewTextCallBold: {
      fontWeight: "bold",
    },
    viewImageInicial: {
      alignItems: "center",
      width: "85%",
    },
  };
}

export default StyleSheet.create(Styles());
