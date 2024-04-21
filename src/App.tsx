
import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CadastraNovoContato from './pages/cadastra'
import Home from './pages/contatos'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novocontato',
    element: <CadastraNovoContato/>
  }
])

function App() {
  return (
    <>
      <Provider store={store} >
        <Container>
          <EstiloGlobal />
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  )
}

export default App
