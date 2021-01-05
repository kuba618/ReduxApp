import React, { useState, forceUpdate } from "react";
import {
  StyleSheet,
  Button,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { numberOfTodos, selectTodos } from "../redux/reducers/TodosReducer";
import { addTodo } from "../redux/TodoActions";

export default function Todos() {
  const todos = useSelector(selectTodos);
  const numberOfTodosToShow = useSelector(numberOfTodos);
  const dispatch = useDispatch();
  const [value, onChangeText] = useState("Todo...");

  return (
    <View style={styles.viewStyle}>
      <Text>Elements in list: {numberOfTodosToShow}</Text>

      <FlatList
        data={todos.todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(todo) => todo.id}
      />

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        onFocus={(text) => onChangeText("")}
        value={value}
      />

      <Button
        title="Add Todo"
        color="#f194ff"
        onPress={() => dispatch(addTodo({ value }))}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f4f4f4",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  viewStyle: {
    flexDirection: "column",
    height: 700,
  },
});
