import React,{useState} from 'react'


const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue]=useState(task.task)

    const handleSubmit=e=>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue('')

    }
  return (
    <div>
     <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='update task' onChange={(e)=>{setValue(e.target.value);}}></input>
        <button type='submit' className='todo-btn'>update</button>
     </form>
     
    </div>
  )
}

export default EditTodoForm
