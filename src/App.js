import './App.css'
import Homepage from '../src/components/Homepage'
import { Container } from '@mui/system'
import Appbar from '../src/components/Appbar'

function App() {
  return (
    <Container>
      <Appbar />
      <Homepage />
    </Container>
  )
}

export default App
