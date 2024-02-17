import './App.css';
import { Footer } from './shared/components/Footer/Footer';
import { Header } from './shared/components/Header';
import { Main } from './shared/components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
     
    </div>
  );
}

export default App;
