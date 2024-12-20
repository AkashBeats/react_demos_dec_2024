import React from 'react'

const KnowMap = () => {

    let list =['First','Second','Third']

    const createElement =(eachValue,idx)=>{

        return <p>{eachValue}</p>
    }
  return (
    <div>
        {/* {
             list.map((eachValue,idx)=>{

                return <p>{eachValue}</p>
             })
        } */}
        {
            list.map(createElement)
        }
    </div>
  )
}

export default KnowMap