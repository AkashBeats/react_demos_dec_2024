import React, { useContext } from 'react'
import { ProductContext } from './Provider'

const PartnerStore = () => {
    // let contextData = useContext(ProductContext)
    const { message, handleClick } = useContext(ProductContext)

    return (
        <div>
            {message}
            <button onClick={handleClick}>Click</button>

        </div>
    )
}

export default PartnerStore