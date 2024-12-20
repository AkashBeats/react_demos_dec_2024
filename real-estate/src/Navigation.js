import React from 'react'
import MenuItem from './MenuItem'

const Navigation = ({handleClick}) => {

    const links =[{link:"home",text:"Home"},{link:"project",text:"Project"},
             {link:"testimonials",text:"Testimonials"}]
  return (
    <div>

        {
            
            links.map((element,idx)=>{

                console.log(`${element.link},${element.text}`) 
                return <MenuItem link={element.link} text={element.text} key={idx}></MenuItem>
            })
        }
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Navigation