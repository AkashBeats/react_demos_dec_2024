import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameReducer from './NameReducer'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import { anotherStore } from './redux-with-slice/store'
import Counter from './redux-with-slice/Counter'
import ShowOffice from './redux-with-thunk/ShowOffice'
import thunkStore from './redux-with-thunk/Store'
import { Login } from './components/Login'
import { useRoutes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  const mystore = configureStore({
    reducer: NameReducer
  })
  const MyRoutes = useRoutes([
    { pathname: '/', element: <FirstComponent /> },

  ])
  return (
    <>
      <Provider store={mystore}>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
      </Provider>

      <Provider store={anotherStore}>
        <Counter></Counter>
      </Provider>

      <Provider store={thunkStore}>
        <ShowOffice></ShowOffice>
      </Provider>
      <Login></Login>
    </>
  )
}

export default App
