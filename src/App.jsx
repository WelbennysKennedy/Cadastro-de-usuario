import './App.css'
import { useState } from 'react'
import Usercard from './components/UserCard'



function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState([])




  function handleSubmit(event) {
    event.preventDefault();


    const newUser = {
      nome,
      email,
      age
    }

    setUsers([...users, newUser])

    setNome('')
    setEmail('')
    setAge('')
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>

        <input type='text' value={nome} onChange={(event) => setNome(event.target.value)} placeholder="Nome" />

        <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />

        <input type='number' value={age} onChange={(event) => setAge(event.target.value)} placeholder="Idade" />

        <button type='submit'>Cadastrar</button>

      </form>

      <div className='user-list'>


        {users.map((user, index) => (
          <Usercard key={index} nome={user.nome} email={user.email} age={user.age} />
        ))}

      </div>

    </div>
  )
}

export default App
