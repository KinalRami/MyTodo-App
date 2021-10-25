import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
//   const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

  const addTodo = todo => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = todos.filter(todo => todo.id !== id);
    setTodos(removedArr);
  };


  return (
    <>
      <h1>What's Your Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;