// src/components/perfilmessages.tsx
import { useEffect, useState } from 'react'
import './perfilmessages.css'

interface Message {
  _id: string
  username: string
  password: string
}

const MarinaPremium = () => {

  return (
    <span id="marinaPremium">
      M A R I N A
    </span>
  )
}

const PerfilMessages = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://jairomatheus89.site/api/person/latest')
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`)
        }
        const data = await response.json()
        setMessages(data)
      } catch (err: any) {
        setError(err.message || 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  if (loading) return <p>Carregando mensagens...</p>
  if (error) return <p>Erro ao carregar mensagens: {error}</p>

  return (
    <div id="master">
        <h2>Últimas mensagens</h2>
        <ul id="scrollzin">
            {messages.map(msg => (
            <li className={msg.username.toLowerCase() === 'marina' ? 'marina-li' : 'li'} key={msg._id}>          
              <span id="apelido">
                <span className={msg.username.toLowerCase() === 'marina'? 'marina-style': ''}>
                  {msg.username.toLowerCase() === 'marina' ? (
                    <>
                      <span>★★★Chef.Estado★★★</span>
                    </>
                  ) : 'Camarada '}
                </span>
                   
                <strong>
                  {msg.username.toLowerCase() === 'marina'?<MarinaPremium/> : msg.username.toLowerCase()}
                </strong>:<br />
              </span>
              <span id="messaginha">
                  &nbsp;- {msg.password}
              </span><br />
            </li>
            ))}
        </ul>
    </div>
  )
}

export default PerfilMessages
