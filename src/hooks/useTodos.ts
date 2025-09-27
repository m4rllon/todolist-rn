import { useContext } from "react";
import { TodoContext, TodoContextType } from "../contexts/todosContext";

export function useTodos():TodoContextType{
    const context = useContext(TodoContext);
    
    if(!context){
        throw new Error('useTodos deve ser usado dentro de um TodosProvider.')
    }

    return context
}