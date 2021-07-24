import React, { useState, useEffect } from 'react'
import './TaskList.css'
import Task from './Task.js'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';


const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        const res = await axios.get('http://localhost:4000/tasks')
        setTasks(res.data)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <div className='TaskList'>
            <h2>Tasks</h2>
            <div className='List'>
                generas el boton, cuando apretas el boton generas esto

                {tasks.map((task) => {
                    return <div>
                        <Task name={task.title} description={task.description} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default TaskList