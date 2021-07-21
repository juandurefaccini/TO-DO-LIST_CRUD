import React from 'react'
import './TaskList.css'
import Task from './Task.js'

export default function TaskList() {
    return (
        <div className='TaskList'>
            <h2>Tasks</h2>
            <div className='List'>
                <Task name="Sacar la caca del perro" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium accusamus quia ipsa esse quasi provident nesciunt nemo aperiam omnis!" />
                <Task name="Limpiar el baños" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium accusamus quia ipsa esse quasi provident nesciunt nemo aperiam omnis!" />
                <Task name="Sacar a pasear al gato" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium accusamus quia ipsa esse quasi provident nesciunt nemo aperiam omnis!" />
                <Task name="Hacerle un mimo a ciro" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium accusamus quia ipsa esse quasi provident nesciunt nemo aperiam omnis!" />
            </div>
        </div>
    )
}
