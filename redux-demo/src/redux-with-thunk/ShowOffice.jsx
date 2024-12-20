import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOffices } from './OfficesSlice'
const ShowOffice = () => {

  const { offices, isloading, hasError } = useSelector(state => state.office)

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOffices())

  }, [dispatch])

  const createElement = (element, idx) => {
    return (
      <div>
        <p key={idx}>{element.id}{element.location}</p>
        <img src={element.imgRef}></img>
      </div>
    )
  }

  return (
    <div>
      {isloading ? <p>Loading</p> : offices.map(createElement)}
    </div>
  )
}

export default ShowOffice