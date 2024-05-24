import logo from './logo.svg';
import './App.css';
import Subscribtimer from './components/Subscribtimer';
import Scrollevent from './components/Scrollevent';
import Fetchingdata from './components/Fetchingdata';
import Mouseevent from './components/Mouseevent'; 
import Changetitle from './components/Changetitle';

function App() {
  return (
    <div className="App">
      <Changetitle/>
       <Mouseevent/>
      <Fetchingdata/>
      <Subscribtimer/>
      <Scrollevent/>
      
    </div>
  );
}

export default App;
