import './App.css';
import {Welcome} from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import ClickHandler from './Components/ClickHandler';
import ClassClick from './Components/ClassClick';
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

      {/* functional component Event handler */}
      <ClickHandler/>

      {/* Class componenet Event handler */}
      <ClassClick/>
    </div>
  );
}

export default App;
