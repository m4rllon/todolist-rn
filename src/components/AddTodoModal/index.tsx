import { TouchableOpacity } from "react-native";
import { 
    Container,
    Title,
    Header,
    CloseIcon,
    Main,
    SubmitButton,
    TextSubmitButton,
 } from "./styles";
 import { InputForms } from "../Forms/InputForms";
 import * as yup from 'yup'
 import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DateInputForm } from "../Forms/DateInputForm";
import { PriorityInputForm } from "../Forms/PriorityInputForm";
import { useTodos } from "../../hooks/useTodos";
import { Ttodos } from "../../interfaces/Ttodos";


interface AddTodoModalProps{
    handleCloseModal: () => void;
    todo?: Ttodos;
}

interface FormData {
    description: string;
    date: Date;
    priority: string;
    status: boolean;
}

const schema = yup.object({
    description: yup.string()
        .required("É necessário informar uma descrição para tarefa."),
    date: yup.date()
        .required("É necessário informar uma data limite."),
    priority: yup.string()
        .required("Selecione um grau de prioridade para tarefa."),
    status: yup.boolean()
        .required()
})

const priorityOptions = [
    {
        value: 'low',
    },
    {
        value: 'medium',
    },
    {
        value: 'high',
    },
]

export function AddTodoModal({todo, handleCloseModal}:AddTodoModalProps){
    const { addTodo, updateTodo } = useTodos();
    let defaultValues
    if(todo){
        defaultValues = {
            description: todo.description,
            date: new Date(todo.date),
            priority: todo.priority,
            status: todo.status,
        }
    } else {
        defaultValues = {
            description: '',
            date: new Date(),
            priority: '',
            status: false,
        }
    }

    const {
        control,
        handleSubmit,
        formState : {errors}
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: defaultValues
    })

    const handleSubmitForm = (data:FormData) => {
        if(todo){
            updateTodo({
                id: todo.id,
                ...data
            })
            handleCloseModal()
        } else {
            addTodo(data)
        }
    }

    return <Container>
        <Header>
            <Title>
                {todo ? 'Editar tarefa' : 'Adicionar tarefa'}
            </Title>
            <TouchableOpacity onPress={handleCloseModal}>
                <CloseIcon
                name="window-close"/>
            </TouchableOpacity>
        </Header>
        <Main>
            <InputForms
            label="Descrição da tarefa"
            name="description"
            control={control}
            error={errors.description?.message}
            placeholder="Informe a descrição da tarefa."
            autoCorrect={false}/>

            <DateInputForm
            label="Data limite da tarefa"
            name="date"
            control={control}
            error={errors.date?.message}/>

            <PriorityInputForm
            label="Prioridade da tarefa"
            options={priorityOptions}
            name="priority"
            control={control}
            error={errors.priority?.message}
            />
        </Main>
        <SubmitButton
        onPress={handleSubmit(handleSubmitForm)}>
            <TextSubmitButton>
                Adicionar
            </TextSubmitButton>
        </SubmitButton>
    </Container>
}
