import { useNavigate } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../userContext";

const CheckUser = ({ children }) => {
  const [user, setUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/user/check-user", { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        setUser(res.data.user);
      })
      .catch((err) => {
        navigate("/login");
      });
  }, [isLoading, navigate, setUser]);

  return user ? children : <p>loading...</p>;
};

export default CheckUser;