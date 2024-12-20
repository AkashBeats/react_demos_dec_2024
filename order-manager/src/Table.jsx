import React, { useState } from 'react'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
export const Table = ({ orders, headers, handleDelete }) => {
  // can extract headers from orders =>TODO
  //Object.keys(orders[0])
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrder = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (


    <>
      <input
        type="text"
        placeholder="Search by name .."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />


      <table className='table table-striped'>
        <TableHeader headers={headers}></TableHeader>
        <TableBody data={filteredOrder} handleDelete={handleDelete}></TableBody>
      </table>
    </>
  )
}
