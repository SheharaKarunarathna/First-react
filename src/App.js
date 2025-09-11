import {useNavigate} from 'react-router-dom';
import './App.css';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1> login!</h1>
        <button className ='Hi-button' onClick={() => navigate('/users')}> Say Hi </button>
      </header>
    </div>
  );
}

export default App;