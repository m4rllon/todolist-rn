export function getPriorityNameFormatted(priority:string){
    if(priority === 'high') return 'Alta';
    else if(priority === 'medium') return 'Moderada';
    else return 'Baixa';
} 