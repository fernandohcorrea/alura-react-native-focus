import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import IconSave from "../../components/Images/icons/IconSave";
import TextFont from "../../components/TextFont";
import { addTasksStyles as style } from "../../styles";

export default function TasksAdd() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.viewContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.viewInnerAddTasks}>
          <TextFont style={style.viewTextAddTasks}>Adicionar tarefa:</TextFont>
          <View style={style.viewFormAddTasks}>
            <TextFont style={style.viewTextAddTasksLabel}>
              Em que você está trabalhando?
            </TextFont>
            <TextInput
              style={style.textInputAddTasks}
              multiline={true}
              numberOfLines={10}
              placeholder="Em que você está trabalhando?"
            />
            <View style={style.viewButtonActions}>
              <Pressable style={style.pressableSaveTask}>
                <IconSave size={20} />
                <TextFont style={style.pressableSaveTaskText}>Salvar</TextFont>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
