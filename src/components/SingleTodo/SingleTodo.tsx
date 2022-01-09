import React from 'react'
import { Todo } from '../../model'
import './SingleTodo.css'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'


type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id: number) => {
        console.log(todos);

        setTodos(
            todos.map((todo) => (
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            ))
        )
    }


    return (
        <form className='singletodo'>
            {
                todo.isDone ? <s className='singletodo_text'>
                    {todo.todo}
                </s> : <span className='singletodo_text'>
                    {todo.todo}
                </span>
            }

            <div className='sigletodo_icons'>
                <span><AiOutlineEdit /></span>
                <span><AiOutlineDelete /></span>
                <span onClick={() => handleDone(todo.id)}><TiTick /></span>
            </div>
        </form>
    )
}

export default SingleTodo
