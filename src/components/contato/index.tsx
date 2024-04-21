import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import ContatosClass from '../../models/contato'
import { editarContato, removerContato } from '../../store/reducers/contatos'

type Props = ContatosClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  numero: numeroOriginal,
  id
  } : Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')

    useEffect (() => {
      if (nomeOriginal.length > 0) {
        setNome(nomeOriginal)
      }
      if (emailOriginal.length > 0) {
        setEmail(emailOriginal)
      }
      if (numeroOriginal.length > 0) {
        setNumero(numeroOriginal)
      }
    }, [nomeOriginal, emailOriginal, numeroOriginal])

    function cancelarEdicao() {
      setEstaEditando(false)
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setNumero(numeroOriginal)
    }

    return (
      <>
        <S.ContatoCard>
              <S.Nome
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}>
                {nome}
              </S.Nome>
              <S.Email
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}>
                {email}
              </S.Email>
              <S.Numero
                value={numero}
                onChange={(evento) => setNumero(evento.target.value)}>{numero}</S.Numero>
          <S.ContainerBotao>
          {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() =>{
              dispatch(
                editarContato({
                nome,
                email,
                numero,
                id})
                )
                setEstaEditando(false)
              }}
              >Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={cancelarEdicao}>Cancelar</S.BotaoCancelarRemover>
          </>
          ) : (
          <>
            <S.BotaoEditar
            onClick={() => setEstaEditando(true)}>Editar</S.BotaoEditar>
            <S.BotaoCancelarRemover
            onClick={() => dispatch(removerContato(id))}>Remover</S.BotaoCancelarRemover>
          </>
          )}</S.ContainerBotao>
        </S.ContatoCard>
      </>
    )
}

export default Contato
