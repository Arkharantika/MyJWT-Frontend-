import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/">
    //       <Login/>
    //     </Route>
    //     <Route path="/register">
    //       <Register/>
    //     </Route>
    //     <Route path="/dashboard">
    //       <Navbar/>
    //       <Dashboard/>
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/users/add" element={<AddUser />} />
      <Route path="/users/edit/:id" element={<EditUser />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/products/edit/:id" element={<EditProduct />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
