export const getPriorityIconName = (priority:string) => {
    if(priority === 'high') return 'chevron-triple-up'
    else if(priority === 'medium') return 'chevron-double-up'
    else return 'chevron-up'
}