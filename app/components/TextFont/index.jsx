import { Text } from "react-native";
import styles from "./styles";

export default function TextFont({ children, fontFamily = "", style }) {
  let font,
    family = null;
  const [fontName, familyName] = fontFamily.indexOf("-")
    ? fontFamily.split("-")
    : ["Unbounded", "Regular"];

  if (fontName) {
    switch (fontName.toLowerCase()) {
      case "unbounded":
      default:
        font = "Unbounded";
        break;
    }
  }

  if (familyName) {
    switch (familyName.toLowerCase()) {
      case "extralight":
        family = "ExtraLight";
        break;
      case "light":
        family = "Light";
        break;
      case "bold":
        family = "Bold";
        break;
      case "black":
        family = "Black";
        break;
      case "Regular":
      default:
        family = "Regular";
        break;
    }
  }
  const fontStyle = styles[`ff${font}${family}`] || styles.ffUnboundedRegular;
  return <Text style={[styles.default, fontStyle, style]}>{children}</Text>;
}
