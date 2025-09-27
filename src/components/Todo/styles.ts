import { Platform } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface StylesProps {
    $todoStatus?: boolean;
    $todoPriority?: string;
}

export const Container = styled.View`
    width: 100%;

    margin-bottom: 16px;

    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 8px;

    padding: 12px 16px;

    background-color: ${({theme}) => theme.colors.background_secondary};

    border-radius: 16px;

    ${Platform.OS === 'android' && `
        elevation: 5;
    `}

    ${Platform.OS === 'ios' && `
        shadow-color: #000;
        shadow-offset: 0px 2px;
        shadow-opacity: 0.2;
        shadow-radius: 8px;
    `}
`

export const InfosContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 8px;
`

export const TextContainer = styled.View`
    justify-content: center;
    align-items: start;
    gap: 8px;
`

export const CheckboxIcon = styled(MaterialCommunityIcons)`
    color: ${({theme}) => theme.colors.text_secondary};
    font-size: 24px;
` 

export const Title = styled.Text<StylesProps>`
    color: ${
        (props) => {
            return props.$todoStatus ? props.theme.colors.text_span : props.theme.colors.text_primary
        }
    };
    font-size: 16px;
`

export const Subtext = styled.Text<StylesProps>`
    color: ${
        (props) => {
            return props.$todoStatus ? props.theme.colors.text_span : props.theme.colors.text_tertiary
        }
    };
    font-size: 16px;
`

export const PriorityIcon = styled(MaterialCommunityIcons)<StylesProps>`
    color: ${
        (props) => {
            if(props.$todoPriority === 'high') return props.theme.colors.icon_high
            else if(props.$todoPriority === 'medium') return props.theme.colors.icon_medium
            else return props.theme.colors.icon_low
        }
    };
    font-size: 24px;
` 

export const OptionsContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 8px;
`

export const TrashIcon = styled(MaterialCommunityIcons)<StylesProps>`
    color: ${({theme}) => theme.colors.text_primary};
    font-size: 24px;
` 