import React, {useState} from 'react';

function TaskList (){
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState(" ");

    const addTask = () => {
        setTask([...task,  newTask]);
        setNewTask(" ")
    }

    return(
        <div>
            <h1>Lista de tareas</h1>

            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <button onClick={addTask}>Agregar Tarea</button>

            <ul>
                {task.map((list, i) =>(
                    <li key={i}>{list}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;