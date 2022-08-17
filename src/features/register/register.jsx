import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { firstName, age, setName, setAge } from './regcomponents/slice'

export function Name() {
  const name = useSelector(firstName)
  const age = useSelector(age)
  const dispatch = useDispatch()
  // console.log(name, age)
  console.log(name)
  return (
    <div>
      <input 
      type="text"
      onChange={(e) => dispatch(setName(e.target.value))}/>
      
    </div>
  )
}