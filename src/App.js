import Profile from './Profile/Profile';
import './App.css';

function App() {


  const name = "Wided Chedly";
  const bio = "Master Marketing et communication"
  const profession = "etudiante"

  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName={name} bio={bio} profession={profession}/>
      </header>
    </div>
  );
}

export default App;
