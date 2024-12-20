import React, { useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const ShowEmployee = () => {

    
    const navigate = useNavigate()

    const checkUserStatus = () => {

        var logged = sessionStorage.getItem("isLogged")
        var token = sessionStorage.getItem('token')
        if (!logged == 'true' && !token == 'abcd123') {
            navigate('/')
        }

    }
    useEffect(() => {
        checkUserStatus()
    })
    return (
        <div></div>
    )
}

export default ShowEmployee