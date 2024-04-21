import NovoContato from '../../containers/formulario'
import { BotoaNavegar } from '../../styles'

const CadastraNovoContato = () => (
  <>
    <NovoContato />
    <BotoaNavegar to="/">Voltar para Home</BotoaNavegar>
  </>
)

export default CadastraNovoContato
