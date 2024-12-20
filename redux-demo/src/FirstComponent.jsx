import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const FirstComponent = () => {

    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)

    const dispatch = useDispatch()

    const handleFirstName = () => {
        dispatch({ type: 'CHANGE_FIRST_NAME', payload: { firstName: 'Ganesh' } })
    }
    return (
        <div>
            {firstName}{lastName}
            <button onClick={handleFirstName}>Change First Name</button>
        </div>
    )
}

export default FirstComponent