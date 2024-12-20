import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { OrderContext } from './OrderDetails'
const EditOrder = () => {

    let params = useParams()
    let { order,
        orderList,
        handleChange,
        handleDelete } = useContext(OrderContext)
    return (
        <div style={{ color: 'green' }}>{params.id}</div>
    )
}

export default EditOrder