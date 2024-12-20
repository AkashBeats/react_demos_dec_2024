import React, { createContext, useState } from 'react'
import PartnerStore from './PartnerStore'
import Logistic from './Logistic'
export const ProductContext = createContext("")

const Provider = ({ children }) => {

  const [bgtheme, setBgTheme] = useState('grey')
  const [message, setMessage] = useState('context Data')

  let handleClick = () => {
    setMessage((currVal) => 'updated on click')
  }
  // let message='context Data'
  const contextData = {
    message,
    handleClick,
    bgtheme
  }

  return (

    <ProductContext.Provider value={contextData}>
      {children}
    </ProductContext.Provider>
  )
}

export default Provider