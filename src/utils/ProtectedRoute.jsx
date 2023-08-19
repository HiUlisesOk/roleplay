import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { logout } from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../redux/actions/userActions";
import { getUserByIdSelector } from "../redux/selector/userSelector";
const ProtectedRoute = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { getUserByIdState } = useSelector(getUserByIdSelector)

    const [user, setUser] = useState({});

    useEffect(() => {
        getUserByIdState && setUser(getUserByIdState)
    }, [getUserByIdState])


    const checkUserToken = () => {
        const userToken = localStorage.getItem('userToken');
        const userInfo = localStorage.getItem('userInfo');
        const userRoles = localStorage.getItem('userRoles');
        const login = localStorage.getItem('Login');

        !user && dispatch(getUserById(user.ID))
        if (!userToken || userToken === 'undefined' || !userInfo || !userRoles || !login) {
            localStorage.setItem("Login", JSON.stringify(false));
            setIsLoggedIn(false);
            logout();
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn, user]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;