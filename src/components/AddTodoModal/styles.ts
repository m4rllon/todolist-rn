import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    width: 100%;
    flex: 1;
    margin-top: 70%;
    justify-content: start;
    align-items: start;
    padding: 32px;

    background-color: ${({theme}) => theme.colors.background_secondary};
    border-radius: 16px 16px 0 0;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CloseIcon = styled(MaterialCommunityIcons)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.text_primary};

`

export const Title = styled.Text`
    font-size: 20px;
    color: ${({theme}) => theme.colors.text_primary};
    font-weight: 500;
`

export const Main = styled.View`
    flex: 1;
    justify-content: start;
    align-items: center;
    gap: 16px;

    padding: 16px 0;
`

export const SubmitButton = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background_tertiary};
    padding: 16px;
    border-radius: 8px;

    justify-content: center;
    align-items: center;
`

export const TextSubmitButton = styled.Text`
    font-size: 20px;
    color: ${({theme}) => theme.colors.text_primary};
`
