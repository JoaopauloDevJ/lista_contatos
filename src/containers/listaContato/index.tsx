import { useSelector } from 'react-redux'
import Contato from '../../components/contato'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const contato = useSelector((state: RootReducer) => state.contato.itens)

  return (
    <div>
      <ul>
      {contato.map((c) => (
        <li key={c.nome}>
          <Contato
          id={c.id}
          nome={c.nome}
          email={c.email}
          numero={c.numero} />
        </li>
      )
      )}
      </ul>
    </div>
  )
}

export default ListaContatos
