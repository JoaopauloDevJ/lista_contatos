import styled from 'styled-components'
import { Botao, DadosContato } from '../../styles'

export const ContatoCard = styled.div`
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px black;
  display:flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`

export const Nome = styled(DadosContato)`
  font-weight: bold;
  padding: 0;
  font-size: 18px;
`

export const Email = styled(DadosContato)`
  font-size: 14px;
`

export const Numero = styled(DadosContato)`
font-size: 16px;
`

export const BotaoEditar = styled(Botao)`
  background-color: #c1c1c1;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: red;
  color: #fff;
`

export const BotaoSalvar = styled(Botao)`
  background-color: green;
  color: #fff;
`

export const ContainerBotao = styled.div`
  display: block;
  align-items: center;
`
