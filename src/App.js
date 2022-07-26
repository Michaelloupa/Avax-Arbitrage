import './App.css';
import Homepage from './Homepage';
import { Container } from '@mui/system';
import Appbar from './Appbar';

function App() {
  return (
    <Container>
      <Appbar/>
      <Homepage/>
    </Container>
  );
}

export default App;
