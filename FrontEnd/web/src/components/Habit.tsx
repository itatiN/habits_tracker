interface HabitProps{
    completed: number
}

export function Habit(props: HabitProps){
    return(
        <div className="bg-black"> {props.completed} </div>
    )
}