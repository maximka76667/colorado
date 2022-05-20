import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { change, selectColors } from './colorSlice'
import './Color.sass'

const Color = () => {
  const { color, darker, brighter } = useAppSelector(selectColors);
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
    <div className='color'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="color" onChange={handleChange} />
        <button type="submit">Change color</button>
      </form>
      <div className='color__list'>
        <div className='color__card' style={{ backgroundColor: darker }}>
          <div className='color__info'>
            <p className="color__value">{darker}</p>
          </div>
        </div>
        <div className='color__card' style={{ backgroundColor: color }}>
          <div className='color__info'>
            <p className="color__value">{color}</p>
          </div>
        </div>
        <div className='color__card' style={{ backgroundColor: brighter }}>
          <div className='color__info'>
            <p className="color__value">{brighter}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Color