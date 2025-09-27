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
import { TouchableOpacity } from "react-native";
import { getPriorityIconName } from "../../utils/getPriorityIconName";

interface TodoProps{
    description: string;
    status: boolean; 
    date: Date;
    priority: string;
}

export function Todo({description, status, date, priority}:TodoProps){
    const [todoStatus, setTodoStatus] = useState(status)
    const currentTodoDate = new Intl.DateTimeFormat('pt-Br', {
            weekday: 'long',
            month: 'short',
            day:'2-digit',
        }).format(date)

    const handleChangeTodoStatus = () => {
        setTodoStatus( prev => !prev)
    }

    const handleDeleteTask = () => {

    }

    return <Container>
        <InfosContainer>
            <TouchableOpacity onPress={handleChangeTodoStatus}>
                <CheckboxIcon
                name={todoStatus ? "checkbox-marked" : "checkbox-blank-outline"}/>
            </TouchableOpacity>
            <TextContainer>
                <Title 
                $todoStatus={todoStatus}>
                    {description}
                </Title>
                <Subtext 
                $todoStatus={todoStatus}>
                    {String(currentTodoDate)}
                </Subtext>
            </TextContainer>
        </InfosContainer>

        <OptionsContainer>
            <PriorityIcon
            $todoPriority={priority}
            name={getPriorityIconName(priority)}/>
            <TouchableOpacity onPress={handleDeleteTask}>
                <TrashIcon
                name="trash-can"/>
            </TouchableOpacity>
        </OptionsContainer>
    </Container>
}