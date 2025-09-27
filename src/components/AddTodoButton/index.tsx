import { 
    Container,
    ButtonIcon
 } from "./styles";

interface AddTodoButtonProps{
    handleOpenModal: () => void;
}

export function AddTodoButton({handleOpenModal}:AddTodoButtonProps){
    return <Container onPress={handleOpenModal}>
        <ButtonIcon
        name="plus-circle"/>
    </Container>
}