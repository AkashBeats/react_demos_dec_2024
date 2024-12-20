import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addSkill } from './CounterSlice'


const Counter = () => {

    const count = useSelector(state => state.counter.value)
    const skills = useSelector(state => state.counter.skills)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
        // earlier its done as useDispatch({type:'Increment',payload:4})
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleAddSkill = () => {
        dispatch(addSkill({skills:['react']}))
    }
    return (
        <div>
            Like {count}
            skill {skills[0]}
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>

            <button onClick={handleAddSkill}>Add Skill</button>
        </div>

    )
}

export default Counter