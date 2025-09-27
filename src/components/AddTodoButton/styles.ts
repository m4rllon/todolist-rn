import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 90%;
    right: 32px;
`

export const ButtonIcon = styled(MaterialCommunityIcons)`
    font-size: 64px;
    color: ${({theme}) => theme.colors.text_tertiary};
`