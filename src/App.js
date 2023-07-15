import Mainbar from "./containers/Mainbar";
import Saidbar from "./containers/Saidbar";

import './assets/styles/global.scss'

function App() {
  return (
    <div className="App container">
      
      <Saidbar/>
      <Mainbar />
      
    </div>
  );
}

export default App;
