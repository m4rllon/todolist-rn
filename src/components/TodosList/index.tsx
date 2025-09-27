import { useState } from "react";
import { Todo } from "../Todo/indes";
import { 
    Container,
    List, 
    Title,
    TitleContainer,
    Subtext } from "./styles";
import { Ttodos } from "../../interfaces/Ttodos";

interface TodosListProps{
    title:string;
    date?: Date;
    data: Ttodos[];
}

export function TodosList({title, date, data}:TodosListProps){
    const currentDate = new Intl.DateTimeFormat('pt-Br').format(date)

    return <Container>
        <TitleContainer>
            <Title>
                {title}
            </Title>
            {date && <Subtext>
                {currentDate}
            </Subtext>}
        </TitleContainer>
        <List
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Todo
        id={item.id}
        description={item.description}
        date={item.date}
        status={item.status}
        priority={item.priority}/>}
        />
    </Container>
}