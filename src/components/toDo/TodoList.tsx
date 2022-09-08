import React, { FC } from 'react'

import { IToDo } from '../../types/types'
import TodoItem from './TodoItem'

interface TodoListProp {
    todos: IToDo[]
}

const TodoList: FC<TodoListProp> = ({ todos }) => {
    return (
        <>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </>
    )
}

export default TodoList
