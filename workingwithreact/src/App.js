import './App.css';
import {Welcome} from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import ClickHandler from './Components/ClickHandler';
import ClassClick from './Components/ClassClick';
import Parent from './Components/Parent';
import Condition from './Components/Condition';
import CouseRender from './Components/CouseRender';
import Styling from './Components/Styling';
import FormC from './Components/FormC';
import Refs from './Components/Refs';
import PortalComp from './Components/PortalComp';
import ErrorBoundary from './Components/ErrorBoundary';
import ErrorCheck from './Components/ErrorCheck';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
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

      {/* child to parent - method as props */}
      <Parent/>

      {/* Conditional Rendering - Sign in ex */}
      <Condition/>

      {/* List Rendering */}
      <CouseRender/>

      {/* Styling  */}
      <Styling primary={true}/>

      {/* Form Handling */}
      <FormC/>

      {/* Refs */}
      <Refs/>

      {/* React Portals */}
      <PortalComp/>


      {/* HOC: Higher Order Component */}
      <ClickCounter/>
      <HoverCounter/>
      
      {/* Error Checking: it will throw error if name="joker" */}
      <ErrorBoundary>
        <ErrorCheck name="superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorCheck name="spiderman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorCheck name="joker"/>
      </ErrorBoundary>

    </div>
  );
}

export default App;
