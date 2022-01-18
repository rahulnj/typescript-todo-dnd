import React, { useState } from 'react'
import { Todo } from '../../model'
import './SingleTodo.css'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { Draggable, Droppable } from 'react-beautiful-dnd'


type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string | number>(todo.todo)

    const handleDone = (id: number) => {
        console.log(todos);

        setTodos(
            todos.map((todo) => (
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            ))
        )
    }

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => (todo.id !== id))
        )
    }
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        )
        setEdit(false)
    }

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (
                    <form className='singletodo' onSubmit={(e) => handleEdit(e, todo.id)} {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {
                            edit ? (<input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />) :
                                todo.isDone ? <s className='singletodo_text'>
                                    {todo.todo}
                                </s> : <span className='singletodo_text'>
                                    {todo.todo}
                                </span>

                        }
                        <div className='sigletodo_icons'>
                            <span onClick={() => {
                                if (!edit && !todo.isDone) {
                                    setEdit(!edit)
                                }
                            }}><AiOutlineEdit /></span>
                            <span onClick={() => handleDelete(todo.id)}><AiOutlineDelete /></span>
                            <span onClick={() => handleDone(todo.id)}><TiTick /></span>
                        </div>
                    </form>
                )
            }

        </Draggable >
    )
}

export default SingleTodo
