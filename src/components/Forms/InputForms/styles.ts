import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: start;
    gap: 8px;
`

export const TextLabel = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.text_primary};
`

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: "#172233"
})`
    width: 100%;
    padding: 16px;
    background-color: aliceblue;

    border: 0;
    border-radius: 8px;

    font-size: 16px
`

export const TextError = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.icon_high};
`