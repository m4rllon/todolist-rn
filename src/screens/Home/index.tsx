import { Container } from "./styles";
import { TodosList } from "../../components/TodosList";
import { useEffect, useState } from "react";
import { AddTodoButton } from "../../components/AddTodoButton";
import { Modal } from "react-native";
import { AddTodoModal } from "../../components/AddTodoModal";
import { useTodos } from "../../hooks/useTodos";

export function Home(){
    const {todos} = useTodos()

    const [completedTodos, setCompletedTodos] = useState(todos.filter(props => props.status))
    const [todoTasks, setTodoTasks] = useState(todos.filter(props => !props.status))
    const [statusModal, setStatusModal] = useState(false)

    const handleOpenModal = () => {
        setStatusModal(true)
    }
    const handleCloseModal = () => {
        setStatusModal(false)
    }

    useEffect(() => {
        setCompletedTodos(todos.filter(props => props.status))
        setTodoTasks(todos.filter(props => !props.status))
        console.log(todos)
    }, [todos])
    
    return <Container
    $modalStatus={statusModal}>
        <TodosList
        title="Today"
        date={new Date()}
        data={todoTasks}/>

        <TodosList
        title="Completed today"
        data={completedTodos}/>

        <AddTodoButton
        handleOpenModal={handleOpenModal}/>

        <Modal
        animationType="slide"
        transparent={true}
        visible={statusModal}>
            <AddTodoModal
            handleCloseModal={handleCloseModal}/>
        </Modal>
    </Container>
}