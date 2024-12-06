import { Link } from 'react-router-dom'
import './App.css'
import CustonRoutes from './Routes/customRoutes'


function App() {
  return (
    <div className='outer-pokedex'>
      <h1 id="pokedex-heading">
       <Link to='/'>Pokedex</Link> 
      </h1> 
      <CustonRoutes />
    </div>
  )
}

export default App
