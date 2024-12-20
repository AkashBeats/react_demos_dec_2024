import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const SecondComponent = () => {
    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)

    const dispatch = useDispatch()

    const handleLastName = () => {
        dispatch({ type: 'CHANGE_LAST_NAME', payload: { lastName: 'Sharma' } })
    }
    return (
        <div>
            {firstName}{lastName}
            <button onClick={handleLastName}>Change Last Name</button>

        </div>
    )
}

export default SecondComponent