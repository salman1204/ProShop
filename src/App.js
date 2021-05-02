import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container>
        <h1>Welcome to PROSHOP</h1>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

