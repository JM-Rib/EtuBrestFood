import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="Header">
        <div className="grid-container">
            <div className="grid-item">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="grid-item">
                <h1>Acceuil</h1>
            </div>
        </div>
    </div>
  );
}

export default App;
