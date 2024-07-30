import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./components/User";
import AddUser from "./components/AddUser";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>    
    </div>
  );
}

export default App;
