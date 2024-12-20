import React, { createContext, useEffect, useState } from 'react'
import { Table } from './Table'
import axios from 'axios'
import AddOrder from './AddOrder'
import EditOrder from './EditOrder'
import MyRoutes from './MyRouteConfig'

export const OrderContext = createContext("")

const OrderDetails = () => {


  let headers = ['Id', 'Customer Name', "Order Value"]

  const initalValue = { id: 0, customerName: '', value: 0 }

  const [orderList, setOrderList] = useState([initalValue])

  const [order, setOrder] = useState(initalValue)

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post('http://localhost:8080/orders', order).then(resp => {
      if (resp.status == 200 || resp.status == 201) {
        setOrderList(currVal => [...currVal, order])

      }
    })
  }


  const handleChange = ({ target }) => {

    let details = { [target.name]: target.value }
    console.log(details)

    setOrder(currVal => ({ ...currVal, [target.name]: target.value }))


  }

  const handleDelete = (id) => {

    let updatedList = orderList.filter(item => item.id !== id);

    setOrderList(currVal => updatedList)

  }

  let contextValue = {
    order,
    orderList,
    handleChange,
    handleDelete,
    handleSubmit
  }


  const fetchData = async () => {

    let response = await axios.get("http://localhost:8080/orders")

    setOrderList(currVal => response.data)

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>

      <OrderContext.Provider value={contextValue}>
        <AddOrder handleChange={handleChange} handleSubmit={handleSubmit}></AddOrder>
        <Table orders={orderList} headers={headers} handleDelete={handleDelete}></Table>
        <EditOrder></EditOrder>
      </OrderContext.Provider>
    </div>
  )
}

export default OrderDetails