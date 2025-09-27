import { Control, 
    Controller, 
    FieldValues, 
    Path,
} from "react-hook-form";
import { Container, 
    InputContainer, 
    TextError, 
    TextLabel,
    TextInputContainer,
    CalendarIcon,
    TextInput } from "./styles";
import { Platform, Text, TextInputProps, TouchableOpacity } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from "react";

interface DateInputFormProps<TFieldValues extends FieldValues> extends TextInputProps {
    label: string;
    control: Control<TFieldValues>;
    name: Path<TFieldValues>; 
    error?: string;
}

export function DateInputForm<TFieldValues extends FieldValues>({label, control, name, placeholder, error}:DateInputFormProps<TFieldValues>){
    const [showDatePicker, setShowDatePicker] = useState(false)
    
    const handleShowDatePiker = () => {
        setShowDatePicker(true)
    }

    const closeDatePiker = () => {
        setShowDatePicker(false)
    }

    return <Container>
        <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => {
            const handleDateChange = (e:DateTimePickerEvent, selectedDate?:Date) => {
                if(Platform.OS === 'android') closeDatePiker()
                if(e.type == 'set' && selectedDate) onChange(selectedDate)
            }
            
            return <InputContainer>
                <TextLabel>{label}</TextLabel>
                <TextInputContainer
                onPress={handleShowDatePiker}>
                    <CalendarIcon name="calendar"/>
                    <TextInput>
                        {value ? new Date(value).toLocaleDateString('pt-Br') : "Clique para definir uma data."}
                    </TextInput>
                </TextInputContainer>
                { showDatePicker && <DateTimePicker
                testID="dateTimePicker"
                value={value}
                mode={'date'}
                is24Hour={true}
                onChange={handleDateChange}
                />}
                {error && <TextError>{error}</TextError>}
            </InputContainer>
        }}/>
    </Container>
}