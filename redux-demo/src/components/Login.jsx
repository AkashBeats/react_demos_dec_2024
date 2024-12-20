import React from 'react'
import { useForm } from '../custom-hooks/useForm'
export const Login = () => {

  const postData = () => {
    console.log('post data called')
    console.log(`In post Data ${values.userName} ${values.password}`)
    if (values.userName.toLowerCase() == 'india' && values.password.toLowerCase() === 'india') {
      sessionStorage.setItem('token', 'abcd1234')
      sessionStorage.setItem('isLogged', true)
    }
  }
  let initialState = { userName: '', password: '' }
  const { onSubmit, onChange, values } = useForm(postData, initialState)

  return (
    <form onSubmit={onSubmit}>

      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input type="text" name='userName' id="userName" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={onChange} />
      </div>
      <input type='submit' className='btn btn-primary' value={'Login'} />
    </form>
  )
}
