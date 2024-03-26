import "./App.css";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home";
import Et from "./pages/Et";
import Telephone from "./pages/Telephone";

function App() {
 
  return (
    <div className="App">
      
     <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/et">Et</Link></li>
        <li><Link to="/telephone">Telefone</Link></li>
      </ul>
      <Routes>
        <Route exact path='/' element={Home()}></Route>
        <Route path='/et' element={Et()}></Route>
        <Route path='/telephone' element={Telephone()}></Route>
      </Routes>
     </Router>



     <Router>
       <Routes>
         <ul>
           <li ><Link to="/Manuela">Manuela</Link></li>
         </ul>
       </Routes>
     </Router>
      
    </div>
  );
}

export default App;
