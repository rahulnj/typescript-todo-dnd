import React from 'react'
import './TodoInput.css'


interface Props {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd: (e: React.FormEvent) => void;
}

const TodoInput: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <div className='Todoinput'>
            <form onSubmit={handleAdd}>
                <input type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoInput
