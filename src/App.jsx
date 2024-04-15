import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false
    }
  ])
  
  const addTodo = (text, category) => {
    const newTodos = [...todos,
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
      }
    ];

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
      );
      setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }
  
  return (
    <div class="border max-w-4xl m-0-auto bg-slate-200 px-10 py-10 rounded-xl mx-auto">
      <h1 class="text-center text-xl"><strong>Lista de tarefas</strong></h1>
      <div class="flex flex-wrap p-5 border-b border-gray-500">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <h2 class="text-center mt-6 mb-2 text-xl"><strong>Criar Tarefa:</strong></h2>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
