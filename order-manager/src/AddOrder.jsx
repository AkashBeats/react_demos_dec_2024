import React,{useState,useEffect} from 'react'

const AddOrder = ({handleChange,handleSubmit}) => {


  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="id">Id</label>
        <input type="text" className="form-control"  name='id'  
        onChange={handleChange} />
        </div>
      <div className="form-group">
        <label htmlFor="customerName">Customer Name</label>
        <input type="text" className="form-control" name='customerName'  onChange={handleChange}/>
        </div>
      <div className="form-group">
        <label htmlFor="value">Order Value</label>
        <input type="text" className="form-control"  name="value"  onChange={handleChange}/> 
        </div>

        <div>
            <button type="submit" className='btn btn-primary'>Add</button>
        </div>

    </form>
  )
}

export default AddOrder