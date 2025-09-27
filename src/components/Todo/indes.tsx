import { useState } from "react";
import { 
    Container, 
    CheckboxIcon, 
    InfosContainer,
    TextContainer, 
    Subtext, 
    Title,
    PriorityIcon, 
    OptionsContainer,
    TrashIcon} from "./styles";
import { Modal, TouchableOpacity } from "react-native";
import { getPriorityIconName } from "../../utils/getPriorityIconName";
import { useTodos } from "../../hooks/useTodos";
import { AddTodoModal } from "../AddTodoModal";

interface TodoProps{
    id: string;
    description: string;
    status: boolean; 
    date: Date;
    priority: string;
}

export function Todo({id, description, status, date, priority}:TodoProps){
    const [statusModal, setStatusModal] = useState(false)
    const { deleteTodo, updateTodo } = useTodos()
    const [todoStatus, setTodoStatus] = useState(status)

    const currentTodoDate = new Intl.DateTimeFormat('pt-Br', {
            weekday: 'long',
            month: 'short',
            day:'2-digit',
        }).format(date)

    const handleChangeTodoStatus = (newStatus: boolean) => {
        setTodoStatus(newStatus)
        updateTodo({
            id:id,
            description: description,
            status: newStatus,
            date: date, 
            priority: priority
        })
    }

    const handleDeleteTask = () => {
        deleteTodo(id)
    }

    const handleOpenModal = () => {
            setStatusModal(true)
    }
    const handleCloseModal = () => {
        setStatusModal(false)
    }

    return <Container>
        <InfosContainer>
            <TouchableOpacity onPress={() => handleChangeTodoStatus(!todoStatus)}>
                <CheckboxIcon
                name={todoStatus ? "checkbox-marked" : "checkbox-blank-outline"}/>
            </TouchableOpacity>
            <TextContainer>
                <Title 
                $todoStatus={todoStatus}>
                    {description}
                </Title>
                <InfosContainer>
                    <Subtext 
                    $todoStatus={todoStatus}>
                        {String(currentTodoDate)}
                    </Subtext>
                    <PriorityIcon
                    $todoPriority={priority}
                    name={getPriorityIconName(priority)}/>
                </InfosContainer>
            </TextContainer>
        </InfosContainer>

        <OptionsContainer>
            <TouchableOpacity onPress={handleDeleteTask}>
                <TrashIcon
                name="trash-can"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenModal}>
                <TrashIcon
                name="pencil"/>
            </TouchableOpacity>
        </OptionsContainer>

        <Modal
        animationType="slide"
        transparent={true}
        visible={statusModal}>
            <AddTodoModal
            todo={{
                id:id,
                description: description,
                status: todoStatus,
                priority: priority,
                date: date
            }}
            handleCloseModal={handleCloseModal}/>
        </Modal>
    </Container>
}