import './App.css';
import {Welcome} from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
function App() {
  return (
    <div className="App">
      
      {/* Welocome-function Components with props.name(name=Readers) 
      and props.children(p tag)
      */}
      <Welcome name="Readers">
        <p>Hello everyone I am a children make sure to use me.</p>
      </Welcome>
      
      {/*Hello-Class Component with this.props.name */}
      <Hello name="Readers"/>

      {/* Message-Class Component with state to change text using button */}
      <Message/>
      
      {/* Counter-class Component more with setState */}
      <Counter/>
    </div>
  );
}

export default App;
