import React from "react"

export interface Greet{

    greeter:string;greeting:string; 
}
const Header:React.FC<Greet> = (props:Greet) => {
  return (
    <div>
        <h1>{props.greeter}{props.greeting}</h1>
    </div>
  )
}

export default Header


