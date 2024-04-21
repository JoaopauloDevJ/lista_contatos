import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contatos from "../../models/contato";

type ContatoSlice = {
  itens: Contatos[]
}

const initialState: ContatoSlice = {
  itens: [
    {
      id: 1,
      nome: 'João Paulo',
      email: 'joaopaulo@hotmail.com',
      numero: '123456'
    },
    {
      id: 2,
      nome: 'Janiele',
      email: 'janiele@gmail.com',
      numero: '321654'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    removerContato: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editarContato: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id)
        if (indexDoContato >= 0) {
          state.itens[indexDoContato] = action.payload
        }
    },
    adicionarContato: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) => contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExiste) {
        alert('Você já adicionou um contato com esse nome. Tente adicionar um nome especifico!')
      } else {
        const ultimoContatoAdicionado = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContatoAdicionado ? ultimoContatoAdicionado.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { removerContato, editarContato, adicionarContato } = contatoSlice.actions
export default contatoSlice.reducer
