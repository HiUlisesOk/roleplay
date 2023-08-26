import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyInfoSelector } from '../../redux/selector/userSelector';
import { getMyInfo } from '../../redux/actions/userActions';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const dispatch = useDispatch();
	const { getMyInfoState } = useSelector(getMyInfoSelector)
	console.log('GetMyInfoState', getMyInfoState)
	const [userInfo, setUserInfo] = useState(null);
	console.log(userInfo)


	useEffect(() => {
		dispatch(getMyInfo())
		setUserInfo(getMyInfoState)
	}, [getMyInfoState?.ID, getMyInfoState?.username, getMyInfoState?.email, getMyInfoState?.profilePicture])




	return (
		<UserContext.Provider value={{ userInfo, userID: userInfo?.ID, username: userInfo?.username, email: userInfo?.email, userAvatar: userInfo?.profilePicture }}>
			{children}
		</UserContext.Provider>
	);
};

export const getUserContext = () => {
	return useContext(UserContext);
};
