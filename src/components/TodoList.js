import React from 'react';
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../states/todoList'
import TodoListStats from './TodoListStats'
import TodoListFilters from './TodoListFilters'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'

// ------ Component: TodoList ---
export default function TodoList() {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}
