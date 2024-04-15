import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category)
    setValue("");
  }

  return (
    <div>
        <form class="max-w-3xl mx-auto" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Digite o título" 
              value={value}
              onChange={(e) => setValue(e.target.value)}
              class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 cursor-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96"
            />
            <select category={category} onChange={(e) => setCategory(e.target.value)}

            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-64 cursor-pointer m-1"
            >
                <option value="">Selecione uma catergoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit"
            class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-blue-800"
            >Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm