import { Pressable, View } from "react-native";
import IconCheck from "../Images/icons/IconCheck";
import IconDelete from "../Images/icons/IconDelete";
import IconEdit from "../Images/icons/IconEdit";
import TextFont from "../TextFont";
import styles from "./styles";

export default function TaskItem({
  text,
  onPressCompleted = null,
  onPressEdit = null,
  onPressDelete = null,
  completed = false,
  ...props
}) {
  const doCompleted = onPressCompleted
    ? () => onPressCompleted(props)
    : () => console.log("Completed");

  const doEdit = onPressEdit
    ? () => onPressEdit(props)
    : () => console.log("Edit");

  const doDelete = onPressDelete
    ? () => onPressDelete(props)
    : () => console.log("Delete");

  let style_task = [styles.viewTasksListItem];
  if (completed) {
    style_task.push(styles.viewTasksListItemCompleted);
  }

  const actions = () => {
    return (
      <>
        <Pressable onPress={doDelete}>
          <IconDelete />
        </Pressable>
        <Pressable onPress={doEdit}>
          <IconEdit />
        </Pressable>
      </>
    );
  };

  return (
    <View style={style_task}>
      <Pressable onPress={doCompleted}>
        <IconCheck bgColor={completed ? "#00F4BF" : "white"} />
      </Pressable>
      <TextFont style={styles.viewTaskText}>{text}</TextFont>
      {completed ? null : actions()}
    </View>
  );
}
