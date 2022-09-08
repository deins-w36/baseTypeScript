import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UseritemProps {
    user: IUser
}

const userItem: FC<UseritemProps> = ({ user }) => {
    return (
        <div style={{ padding: 15, border: '1px solid black' }}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default userItem
