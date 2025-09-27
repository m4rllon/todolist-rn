import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { Ttodos } from "../../interfaces/Ttodos";

export const Container = styled.View`
    margin-top: 16px;
    width: 100%;
    /* height: 40%; */

    justify-content: center;
    align-items: start;
    gap: 16px;
`

export const TitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;

`

export const List = styled(
    FlatList as new (props: FlatListProps<Ttodos>) => FlatList<Ttodos>
)``

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_primary};
    font-size: 20px;
    font-weight: bold;
`

export const Subtext = styled.Text`
    color: ${({theme}) => theme.colors.text_tertiary};
    font-size: 16px;
`