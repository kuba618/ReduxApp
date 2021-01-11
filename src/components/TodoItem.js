import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useDispatch } from "react-redux";
import { markCompleted, removeTodo } from "../redux/TodoActions";

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
      <View style={styles.textWrapper}>
        <Text style={getStyle()}>{item.title}</Text>
      </View>
      <View style={styles.button}>
        <Button
          color="#FF7129"
          title="REMOVE"
          onPress={() => dispatch(removeTodo({ item }))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#4f4f47",
    padding: 5,
    borderBottomColor: "#ccc",
    borderStyle: "dotted",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  lineThrough: {
    textDecorationLine: "line-through",
    color: "#EFD28D",
  },
  lineNone: {
    textDecorationLine: "none",
    color: "#EFD28D",
  },
  button: {
    marginLeft: "auto",
  },
  textWrapper: {
    flex: 1,
  },
});
