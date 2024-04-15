import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
    class="w-60 h-40 p-3 bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <p class="text-center text-lg my-2">{todo.text}</p>
            <p class="italic text-center text-base my-2">({todo.category})</p>
        </div>
        <div class="justify-center flex">
            <button onClick={() => completeTodo(todo.id)}
            class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >Completar</button>
            <button onClick={() => removeTodo(todo.id)}
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >X</button>
        </div>
    </div>
  )
}

export default Todo