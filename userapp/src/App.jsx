import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./components/User";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import ViewUser from "./components/ViewUser";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/updateUser/:userId" element={<UpdateUser />} />
        <Route path="/viewUser/:userId" element={<ViewUser />} />
      </Routes>    
    </div>
  );
}

export default App;
