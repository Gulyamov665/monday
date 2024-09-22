import axios from 'axios'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

function App() {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const chatId = -974972939

    const { phone, ...others } = data
    const phoneSplited = phone.split(' ').join('')

    axios
      .post('https://b7a8-84-54-70-123.ngrok-free.app/monday', {
        ...others,
        phone: phoneSplited,
        chat_id: chatId,
      })
      .then(reset(), navigate('/success'))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <div className="form">
        <Header />
        <div style={{ marginBottom: 10, color: 'black' }}>
          <h3> Оставить заявку</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Фамилия"
              {...register('firstname')}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Имя"
              {...register('lastname')}
              required
            />
          </div>

          <InputMask
            mask="\9\98 99 999 99 99"
            maskChar="_"
            alwaysShowMask={true}
            placeholder="Номер телефона"
            {...register('phone')}
            required
          >
            {(inputProps) => <input type="text" {...inputProps} />}
          </InputMask>
          <br />
          <br />
          <button>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default App
