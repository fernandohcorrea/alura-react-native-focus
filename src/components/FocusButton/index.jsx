import { Pressable, Text } from "react-native";
import IconDelete from "../Images/icons/IconDelete";
import IconPause from "../Images/icons/IconPause";
import IconPlay from "../Images/icons/IconPlay";
import IconPlus from "../Images/icons/IconPlus";
import styles from "./styles";

export default function FocusButton({
  label = "No Label",
  onPress = null,
  icon = null,
  iconName = "play" | "pause" | "plus" | "delete" | null,
  fill = true,
  ...props
}) {
  const styleBtn = [styles.pressableBtn];
  const styleBtnText = [styles.pressableBtnText];
  let iconType = null;
  let colorFill = "#B872FF";

  if (fill) {
    styleBtn.push(styles.pressableBtnFill);
    styleBtnText.push(styles.pressableBtnTextFill);
    colorFill = null;
  }

  if (icon) {
    iconType = icon;
  } else {
    switch (iconName) {
      case "play":
        iconType = <IconPlay bgColor={colorFill} />;
        break;
      case "pause":
        iconType = <IconPause bgColor={colorFill} />;
        break;
      case "plus":
        iconType = <IconPlus bgColor={colorFill} />;
        break;
      case "delete":
        iconType = <IconDelete bgColor={colorFill} />;
        break;
      default:
        iconType = null;
        break;
    }
  }

  const doPressBtn = onPress
    ? () => onPress(props)
    : () => console.log("FocusButton");

  return (
    <Pressable style={styleBtn} onPress={doPressBtn}>
      {iconType ? iconType : null}
      <Text style={styleBtnText}>{label}</Text>
    </Pressable>
  );
}
