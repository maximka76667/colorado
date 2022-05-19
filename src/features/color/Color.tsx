import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { change, selectColors } from './colorSlice'

const Color = () => {
  const { color, darker, brighter, mix } = useAppSelector(selectColors);
  const dispatch = useAppDispatch();

  const [colorValue, setColorValue] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(change(colorValue));
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColorValue(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="color" onChange={handleChange} />
        <button type="submit">Change color</button>
        <p style={{ backgroundColor: darker, color: brighter }}>{darker}</p>
        <p style={{ backgroundColor: color, color: mix }}>{color}</p>
        <p style={{ backgroundColor: brighter, color: darker }}>{brighter}</p>
      </form>
    </div>
  )
}

export default Color