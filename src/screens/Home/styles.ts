import styled from "styled-components/native";

interface StylesProps {
    $modalStatus: boolean;
}

export const Container = styled.View<StylesProps>`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.background_primary};

    padding-left: 32px;
    padding-right: 32px;

    ${
     (props) => props.$modalStatus ? 'filter: brightness(75%);': ''
    }
`