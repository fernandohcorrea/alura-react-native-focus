import { router } from "expo-router";
import { SafeAreaView, View } from "react-native";
import FocusButton from "../../components/FocusButton";
import TaskItem from "../../components/Task";
import TextFont from "../../components/TextFont";
import { tasksStyles as styles } from "../../styles";

const tasksList = [
  {
    id: 1,
    label: "Estudar React Native",
    completed: false,
  },
  {
    id: 2,
    label: "Estudar React",
    completed: true,
  },
  {
    id: 3,
    label: "Estudar Node",
    completed: true,
  },
];

export default function Tasks() {
  const onComplete = ({ dataItem }) => {
    console.log(dataItem);
    console.log("Task completed");
  };

  const onDelete = ({ dataItem }) => {
    console.log(dataItem);
    console.log("Task delete");
  };

  const onEdit = ({ dataItem }) => {
    console.log(dataItem);
    console.log("Task edit");
  };

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewContent}>
        <TextFont style={styles.viewTextTitle}>Tarefas</TextFont>
        <TextFont style={styles.viewTextTasksList}>Lista de tarefas:</TextFont>
        <View style={styles.viewTasksList}>
          {tasksList.map((task) => (
            <TaskItem
              key={task.id}
              text={task.label}
              completed={task.completed}
              onPressCompleted={onComplete}
              onPressDelete={onDelete}
              onPressEdit={onEdit}
              dataItem={task}
            />
          ))}
        </View>
        <View style={styles.viewTaskButton}>
          <FocusButton
            iconName="plus"
            fill={false}
            label="Adicionar Tarefa"
            onPress={() => router.navigate("/tasks-add")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
