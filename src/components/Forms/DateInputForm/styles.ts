import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    
    justify-content: center;
    align-items: center;
    
`

export const InputContainer = styled(SafeAreaView)`
    width: 100%;
    justify-content: start;
    align-items: start;
    gap: 8px;
`

export const TextInputContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 12px;

    background-color: aliceblue;
    padding: 16px;
    border: 0;
    border-radius: 8px;
`

export const CalendarIcon = styled(MaterialCommunityIcons)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.background_primary};
`

export const TextInput = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.background_primary};
`

export const TextLabel = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.text_primary};
`

export const TextError = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.icon_high};
`