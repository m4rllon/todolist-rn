import { getPriorityIconName } from "../../../../utils/getPriorityIconName";
import { getPriorityNameFormatted } from "../../../../utils/getPriorityNameFormatted";
import { Container, PriorityIcon, TextCard } from "./styles";

interface PriorityCardProps {
    priority: string;
    selected: boolean;
    onPress: () => void;
}

export function PriorityCard({priority, selected, onPress}:PriorityCardProps){
    return <Container
    onPress={onPress}
    $priority={priority}
    $isPressed={selected}>
        <PriorityIcon
        $priority={priority}
        name={getPriorityIconName(priority)}/>
        <TextCard
        $priority={priority}>
            {getPriorityNameFormatted(priority)}
        </TextCard>
    </Container>
}