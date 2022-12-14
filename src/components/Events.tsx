import React, { FC, useState } from 'react'

const Events: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setDrag] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('take')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)
        console.log('drop')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type='text' />
            <button onClick={clickHandler}>Кнопка</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 20 }}
            ></div>
        </div>
    )
}

export default Events
