import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Todo } from '../../model'
import SingleTodo from '../SingleTodo/SingleTodo'
import './TodoList.css'


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completed: Todo[]
    setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>
}




const TodoList: React.FC<Props> = ({ todos, setTodos, completed, setCompleted }) => {


    return (
        <div className='todolist'>
            <Droppable droppableId='todolist-active'>
                {
                    (provided) => (
                        <div className='active-todolist' ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>Active Tasks</h3>
                            {
                                todos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        key={todo.id}
                                        todos={todos}
                                        setTodos={setTodos}
                                    />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }

            </Droppable>
            <Droppable droppableId='todolist-completed'>
                {
                    (provided) => (
                        <div className="completed-todolist" ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>Completed Tasks</h3>
                            {
                                completed.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        key={todo.id}
                                        todos={completed}
                                        setTodos={setCompleted}
                                    />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }

            </Droppable>
        </div>
    )
}

export default TodoList
