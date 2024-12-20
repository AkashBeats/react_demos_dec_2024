import React from 'react'
import { TableRow } from './TableRow'

export const TableBody = ({data,handleDelete}) => {
  return (
    <tbody>
         {
            data.map((eachorder,idx)=>{

                return  <TableRow key={idx} val1={eachorder.id} val2={eachorder.customerName} val3={eachorder.value} handleDelete={handleDelete}></TableRow>

            })
         }
        </tbody>
  )
}
