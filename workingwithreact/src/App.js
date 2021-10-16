import './App.css';
import {Welcome} from './Components/Welcome';
import Hello from './Components/Hello';
function App() {
  return (
    <div className="App">
      <Welcome name="Readers">
        <p>Hello everyone I am a children make sure to use me.</p>
      </Welcome>
      <Hello name="Readers"/>
    </div>
  );
}

export default App;
