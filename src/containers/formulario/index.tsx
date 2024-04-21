import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { adicionarContato } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'

const FormularioCadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastraNovoContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionarContato({
        email,
        nome,
        numero
      })
    )
    navigate('/')
  }
  return (
    <S.Formulario onSubmit={(cadastraNovoContato)}>
      <S.Dados placeholder="Nome: "
        value={nome} onChange={evento => setNome(evento.target.value)} />
      <S.Dados placeholder="E-mail: "
        value={email} onChange={evento => setEmail(evento.target.value)}/>
      <S.Dados placeholder="Numero: "
        value={numero} onChange={evento => setNumero(evento.target.value)}/>
      <S.BotaoCadastra type="submit">Salvar Contato</S.BotaoCadastra>
    </S.Formulario>
  )
}

export default FormularioCadastro
