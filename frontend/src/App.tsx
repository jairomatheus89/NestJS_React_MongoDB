import { useState } from 'react'
import PerfilMessages from './components/perfilmessages';
import sickle from './assets/sickle.gif'
import './App.css'

function App() {

  const [username, setName] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('https://jairomatheus89.site/api/person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`)
      }

      alert(`Mensagem enviada em nome de: ${username}`)
      window.location.reload()
    } catch (error) {
      alert('Falha ao criar pessoa: ' + error)
    }
  }

  return (
    <>
      <h1>HellComrade</h1>
      <form id="formzin" onSubmit={handleSubmit}>
        <label htmlFor="name">Digite seu Apelido/Vulgo:</label>
        <input
          maxLength={25}
          id="name"
          type="text"
          required
          value={username}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="messagebox">Digite sua mensagem:</label>
        <textarea
          maxLength={150}
          id="messagebox"
          required
          value={password}
          onChange={e => setPass(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <PerfilMessages/>
      <img id="sickle1" src={sickle}/>
      <img id="sickle2" src={sickle}/>
    </>
  )
}

export default App
