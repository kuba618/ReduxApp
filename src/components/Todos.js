import React from "react";
import { FlatList, View } from "react-native";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodos } from "../redux/reducers/TodosReducer";

export default function Todos() {
  const todos = useSelector(selectTodos);

  return (
    <View>
      <FlatList
        data={todos.todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
}
