import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

interface StylesProps {
    $priority?: string;
    $isPressed?: boolean;
}

export const Container = styled.TouchableOpacity<StylesProps>`
    flex-grow: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-width: 1.5px;
    border-radius: 8px;
    border-color: ${
        (props) => {
            if(props.$priority === 'high') return props.theme.colors.icon_high
            else if(props.$priority === 'medium') return props.theme.colors.icon_medium
            else return props.theme.colors.icon_low
        }
    };
    background-color: ${
        (props) => {
            if(props.$isPressed){
                if(props.$priority === 'high') return '#e2466519'
                else if(props.$priority === 'medium') return '#c7b52d1a'
                else return '#5bc72d1a'
            }
            else return 'transparent'
        }
    };

    padding: 12px;
`

export const PriorityIcon = styled(MaterialCommunityIcons)<StylesProps>`
    color: ${
        (props) => {
            if(props.$priority === 'high') return props.theme.colors.icon_high
            else if(props.$priority === 'medium') return props.theme.colors.icon_medium
            else return props.theme.colors.icon_low
        }
    };
    font-size: 24px;
` 

export const TextCard = styled.Text<StylesProps>`
    font-size: 16px;
    color: ${
        (props) => {
            if(props.$priority === 'high') return props.theme.colors.icon_high
            else if(props.$priority === 'medium') return props.theme.colors.icon_medium
            else return props.theme.colors.icon_low
        }
    };
`