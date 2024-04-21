import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
    }

    body {
      background-color:#281a36;
    }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Botao = styled.button`
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
`

export const DadosContato = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
  height: 35px;
  width: 280px;
`

export const BotoaNavegar = styled(Link)`
  background-color: #2daa4d;
  color: #fff;
  text-decoration: none;
  padding: 8px;
  position: fixed;
  top: 20px;
  left: 50px;
  border-radius: 8px;
`

export default EstiloGlobal
