import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Success() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        textAlign:'center',
        verticalAlign: 'center',
        color: 'white',
        marginTop:'50%'
      }}
    >
      <h3>Заявка успешно обработана</h3> <br />
      <div>
        <button onClick={() => navigate(-1)}>Вернуться</button>
      </div>
    </div>
  )
}
