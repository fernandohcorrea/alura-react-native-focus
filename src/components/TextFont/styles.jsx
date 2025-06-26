import { StyleSheet } from "react-native";
function Styles() {
  return {
    ffUnboundedRegular: {
      fontFamily: "UnboundedRegular",
    },
    ffUnboundedBold: {
      fontFamily: "UnboundedBold",
    },
    ffUnboundedExtraLight: {
      fontFamily: "UnboundedExtraLight",
    },
    ffUnboundedLight: {
      fontFamily: "UnboundedLight",
    },
    ffUnboundedBlack: {
      fontFamily: "UnboundedBlack",
    },
    default: {
      fontSize: 16,
      lineHeight: 20,
    },
  };
}

export default StyleSheet.create(Styles());
