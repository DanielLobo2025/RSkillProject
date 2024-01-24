import './App.css';//Importing App.css into App.js
import Hello from './components/Hello';//Allows us to use the hello component in the app.js file
//import (whatever the component is called) from '(the file path)'
import Message from './components/Message';
//Another example of importing a component into the app.js file
function App() {
  return (
    <div className="App">
      {/*FYI this is how you create a comment in react */}
      <Hello/>
      {/*This is how you call the function you could also do <Hello><Hello/> or you can just do what I did just one tag */}
      
      <Message/>
      {/*Same concept <(Component name)/>) */}
    </div>
  );
}

export default App;
