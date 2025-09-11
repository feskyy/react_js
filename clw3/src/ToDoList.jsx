import { useEffect, useState } from "react";

function ToDoList() {
    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if (tasks.length > 10) {
            alert('У вас более 10 задач для выполнения')
        }
    }, [tasks])

    const handleAdd = () => {
        const trimmed = taskText.trim() 
        if (!trimmed) return 
        setTasks(prev => [...prev, trimmed])
        setTaskText('')

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAdd
        }
    }

    return (
        <div style={{maxWidth: 400, margin: '0 auto', textAlign: 'left'}}>
            <h2>Мои задачи</h2>
            <div style={{display: 'flex', gap: 8}}>
                <input
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Новая задача"
                    style={{flex: 1, padding: 8}}
                />
                <button onClick={handleAdd}>Добавить задачу</button>
            </div>

            <ul style={{marginTop: 16}}>
                {tasks.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;