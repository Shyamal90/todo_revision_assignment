import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Todo.css'

function Todo() {
    const todoList = useSelector((state)=> state.data)
    // console.log("todoList ",todoList)


    //take value of task
    const [task,setTask] = useState("");
    console.log(task)


    //take value of date
    let date = new Date().toISOString().slice(0,10);
    console.log(date)
    const [selectedDate, setSelectedDate] = useState(date);
    console.log(selectedDate);

    return (
        <>
            <div className="container">
                <div className="todo_heading">
                    <h1>Todo Application</h1>
                </div>

                <div className="addTodoForm">
                    <div className="addTodo">
                        <input type="text" placeholder='Enter task name...' id='inputField' value={task} onChange={(event)=>setTask(event.target.value)}/>
                        {/*  */}
                    </div>

                    <div className="addDeadLine">
                        <h3>Set Deadline : <input type="date" value={selectedDate} onChange={(event)=>setSelectedDate(event.target.value)}/> <input type="time" name="" id="" /></h3>
                    </div>

                    <div className="saveButton">
                       <button id='saveBtn'>Save</button>
                    </div>
                </div>


                <div className="showTodoList">
                    <table border="1">
                        <thead>
                            <tr>
                                <td>#No</td>
                                <td>Todo Name</td>
                                <td>Status</td>
                                <td>Deadline</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default Todo
