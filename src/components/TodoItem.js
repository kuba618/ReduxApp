import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useDispatch } from "react-redux";
import { markCompleted } from "../redux/TodoActions";

export default function TodoItem({ item }) {
  const dispatch = useDispatch();

  const getStyle = () => {
    return item.completed ? styles.lineThrough : styles.lineNone;
  };

  return (
    <View style={styles.todoItem}>
      <CheckBox
        disabled={false}
        value={item.completed}
        onValueChange={(newValue) => dispatch(markCompleted(item.id, newValue))}
      />
      <Text style={getStyle()}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderBottomColor: "#ccc",
    borderStyle: "dotted",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  lineThrough: {
    textDecorationLine: "line-through",
  },
  lineNone: {
    textDecorationLine: "none",
  },
});
