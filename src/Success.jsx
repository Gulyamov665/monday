import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Success() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h3>Заявка успешно обработана</h3> <br />

      <button onClick={() => navigate(-1)}>Вернуться</button>
    </div>
  )
}
