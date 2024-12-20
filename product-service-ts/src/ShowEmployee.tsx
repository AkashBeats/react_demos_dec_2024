
import React,{useState,useEffect} from 'react'

const ShowEmployee = () => {

    const [age, setAge] = 
    React.useState<number>(0);

    const [employee, setEmployee] = 
useState<{name: string; salary: number}>({
    name: '',
    salary: 0,
  });

  useEffect(() => {
    setEmployee({name: 'James', salary: 100});
  }, []);


  return (
    <div>
              <h2>Name: {employee.name}</h2>
      <h2>Salary: {employee.salary}</h2>

    </div>
  )
}

export default ShowEmployee



 