import { useEffect, useState } from 'react'
import './App.css'
import { IUser } from './interfaces/user'




function App() {
  const [users, setUsers] = useState<IUser[]>()
  useEffect(() => {
    (async () => {
      const responseUser = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
      setUsers(responseUser)
    })()

  }, [])


  return (
    <div className="App">
      <h1>dropdown bolado</h1>
      <select name="select">
        {users?.map((user: IUser) => {
          return <option key={user.id} value={user.name}>{user.name}</option>
        })}
      </select>
    </div>
  )
}

export default App
