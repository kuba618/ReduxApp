import React, { useState, forceUpdate } from "react";
import {
  StyleSheet,
  Button,
  FlatList,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>
            Elements in list: {numberOfTodosToShow}
          </Text>

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
            color="#FF7129"
            onPress={() => dispatch(addTodo({ value }))}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    backgroundColor: "#4f4f47",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  viewStyle: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
  },
  textStyle: {
    color: "#ffffff",
  },
});
