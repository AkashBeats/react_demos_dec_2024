import React from 'react'
import { TableRow } from './TableRow'

export const TableHeader = ({headers}) => {
  return (
    <thead>
        <tr>
        {
            headers.map((eachElement,idx)=>{

             return <th key={idx}>{eachElement}</th>
            })
        }
            </tr>
        
    </thead>
  )
}
