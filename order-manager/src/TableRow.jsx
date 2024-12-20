import React from 'react'
import { Link } from 'react-router-dom'
export const TableRow = ({val1,val2,val3,handleDelete}) => {
  return (
    <tr><td>{val1}</td><td>{val2}</td><td>{val3}</td>
    <td><button onClick={()=>handleDelete(val1)}>Delete</button></td>
    <td><Link to={'/edit/${val1}'} >Edit</Link></td></tr>
  )
}
