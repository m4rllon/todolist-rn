import React, { createContext, ReactNode, useState } from "react";
import { todosMock } from "../mocks/todos";

export type TTodo = {
    id: string,
    description: string,
    date: Date,
    status: boolean,
    priority: string,
}

type TNewTodo = {
    description: string,
    date: Date,
    status: boolean,
    priority: string,
}

export interface TodoContextType {
    todos: TTodo[];
    setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
    addTodo: (newTodo:TNewTodo) => void;
    deleteTodo: (todoId:string) => void;
    updateTodo: (newTodo:TTodo) => void
}

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children } : TodoProviderProps) => {
    const [ todos, setTodos ] = useState(todosMock)

    const addTodo = (newTodo:TNewTodo) => {
        const newTodoFormatted = {
            id: `${todos.length+1}`,
            ...newTodo
        }
        setTodos(prev => [...prev, newTodoFormatted])
    }

    const deleteTodo = (todoId:string) => {
        const newListTodos = todos.filter(todo => todoId != todo.id)
        setTodos(newListTodos)
    }

    const updateTodo = (newTodo: TTodo) => {
        const newListTodos = todos.map(
            todo => {
                if(todo.id === newTodo.id){
                    return newTodo
                } else return todo
            }
        )

        setTodos(newListTodos)
    }

    return <TodoContext.Provider value={ {todos, setTodos, addTodo, deleteTodo, updateTodo } }>
        {children}
    </TodoContext.Provider>
}
