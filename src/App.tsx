import axios from 'axios'
import { useEffect, useState } from 'react'

import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import ToDoList from './components/toDo/TodoList'
import Events from './components/Events'

import { IUser, IToDo } from './types/types'

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [todo, setToDo] = useState<IToDo[]>([])

    useEffect(() => {
        fetchUsers()
        fetchToDos()
    }, [])

    const fetchUsers = async () => {
        try {
            const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(resp.data)
        } catch (e) {
            alert(e)
        }
    }
    const fetchToDos = async () => {
        try {
            const resp = await axios.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setToDo(resp.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <Card
                onClick={num => console.log('click!', num)}
                variant={CardVariant.outlined}
                height='200px'
                width='200px'
            >
                <button>Кнопка</button>
            </Card>
            <UserList users={users} />
            <ToDoList todos={todo} />
            <Events />
        </div>
    )
}

export default App
