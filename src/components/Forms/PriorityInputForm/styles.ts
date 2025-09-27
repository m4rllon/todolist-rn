import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: start;
    gap: 8px;
`

export const CardsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`

export const TextLabel = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.text_primary};
`

export const TextError = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.icon_high};
`