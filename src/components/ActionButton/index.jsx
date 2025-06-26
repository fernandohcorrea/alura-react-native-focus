import { Pressable, Text } from "react-native";
import styles from "./styles";

const ActionButton = ({ label, isActive, onPress }) => {
  let stylesPressable = null;
  if (isActive) {
    stylesPressable = styles.viewActionsMenuBtnActive;
  }

  return (
    <Pressable style={stylesPressable} onPress={onPress}>
      <Text style={styles.viewActionsMenuBtnText}>{label}</Text>
    </Pressable>
  );
};

ActionButton.defaultProps = {
  isActive: false,
  onPress: () => alert("Action button pressed!"),
  label: "Action button",
};

export default ActionButton;
