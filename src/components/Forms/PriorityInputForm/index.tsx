import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { 
    CardsContainer,
    Container,
    TextError,
    TextLabel,
} from "./styles";
import { TextInputProps } from "react-native";
import { PriorityCard } from "./PriorityCard";
import { useEffect, useState } from "react";

type Option = {
    value: string,
}

interface InputFormsProps<TFieldValues extends FieldValues> extends TextInputProps {
    label: string;
    options: Option[];
    control: Control<TFieldValues>;
    name: Path<TFieldValues>; 
    error?: string;
}

export function PriorityInputForm<TFieldValues extends FieldValues>({label, options, control, name, error}:InputFormsProps<TFieldValues>){

    return <Container>
        <TextLabel>{label}</TextLabel>
        <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => {
            return (<CardsContainer>
                {options.map( option => (
                    <PriorityCard
                    key={option.value}
                    onPress={() => onChange(option.value)}
                    selected={value === option.value}
                    priority={option.value}/>
                ))}
        </CardsContainer>) 
        }}/>
        <TextError>{error}</TextError>
    </Container>
}