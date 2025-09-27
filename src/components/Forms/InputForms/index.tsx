import { Control, 
    Controller, 
    FieldValues, 
    Path 
} from "react-hook-form";
import { TextInputProps } from "react-native";
import { Container,
    TextLabel, 
    TextError,
    TextInput 
} from "./styles";

interface InputFormsProps<TFieldValues extends FieldValues> extends TextInputProps {
    label: string;
    control: Control<TFieldValues>;
    name: Path<TFieldValues>; 
    placeholder: string;
    error?: string;
}

export function InputForms<TFieldValues extends FieldValues>({label, control, name, placeholder, error, ...rest}:InputFormsProps<TFieldValues>){
    return <Container>
        <TextLabel>
            {label}
        </TextLabel>
        <Controller
        name={name}
        control={control as Control<FieldValues>}
        render={({ field: {onChange, value} }) => (
            <TextInput
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            {...rest}/>
        )}/>
        { error && <TextError>
            {error}
        </TextError>}        
    </Container> 
}