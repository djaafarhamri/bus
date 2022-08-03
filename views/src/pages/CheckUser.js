import { useNavigate } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../userContext";

const CheckUser = ({ children, roles }) => {
  const [user, setUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post(`http://localhost:4000/user/check-user`, {roles}, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log('err : ', err.response.data);
        if (err.response.data === "login!admin") {
          alert("not admin");
          navigate("/");
        } else {
          navigate("/login");
        }
      });
  }, [isLoading, navigate, roles, setUser]);

  return user ? children : <p>loading...</p>;
};

export default CheckUser;