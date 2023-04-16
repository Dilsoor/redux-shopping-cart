import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Cart from "./components/cards/Cart";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
     
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/cart" element={
            <ProtectedRoute user={user}>
              <Cart user={user}/>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
      </Routes> */}
    </div>
  );
}

export default App;
