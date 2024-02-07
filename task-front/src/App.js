import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Addtask from './users/Addtask';
import Edittask from './users/Edittask';
import ViewTask from './users/ViewTask';
import Login from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';



function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<Addtask/>}/>
        <Route exact path="/edituser/:id" element={<Edittask/>}/>
        <Route exact path="/viewtask/:id" element={<ViewTask/>}/>
        {/* <Route exact path="/register" element={<RegisterUser/>}/> */}
        <Route exact path="/register" element={<Login/>}/>
        <Route exact path="/Login" element={<LoginUser/>}/>

        
        
        </Routes> 
      
      </Router>
      
    </div>
  );
}

export default App;
