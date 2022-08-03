import "./App.css";
import { Routes, Route, useLocation } from "react-router";
import Nav from "./shared/Nav";
import Camion from "./pages/Camion/Camion";
import Bus from "./pages/Bus/Bus";
import AddBus from "./pages/Add-Bus/AddBus";
import Login from "./pages/LoginPage/Login";
import Ticket from "./pages/Ticket/Ticket";
import Historique from "./pages/Historique/Historique";
import AddUser from "./pages/AddUser/AddUser";
import Users from "./pages/Users/Users";
import CheckUser from "./pages/CheckUser";
import { useEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsLogin(
      location.pathname.toLocaleLowerCase() === "/login"
    )
  }, [location]);
  return (
    <div className="flex">
      {!isLogin && <Nav />}
      <Routes>
        <Route
          path="/"
          element={
            <CheckUser roles={['admin', 'vendor']}>
              <Camion />
            </CheckUser>
          }
        />
        <Route
          path="/bus"
          element={
            <CheckUser roles={['admin', 'vendor']}>
              <Bus />
            </CheckUser>
          }
        />
        <Route
          path="/add-bus"
          element={
            <CheckUser roles={['admin']}>
              <AddBus />
            </CheckUser>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/ticket"
          element={
            <CheckUser roles={['admin', 'vendor']}>
              <Ticket />
            </CheckUser>
          }
        />
        <Route
          path="/historique"
          element={
            <CheckUser roles={['admin', 'vendor']}>
              <Historique />
            </CheckUser>
          }
        />
        <Route
          path="/users"
          element={
            <CheckUser roles={['admin']}>
              <Users />
            </CheckUser>
          }
        />
        <Route
          path="/add-user"
          element={
            <CheckUser roles={['admin']}>
              <AddUser />
            </CheckUser>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
