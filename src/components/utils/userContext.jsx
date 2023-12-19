import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyInfoSelector } from '../../redux/selector/userSelector';
import { getMyInfo } from '../../redux/actions/userActions';
import { logout } from '../../utils/Logout';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const dispatch = useDispatch();
	const { getMyInfoState } = useSelector(getMyInfoSelector);
	const [loading, setLoading] = useState(true);

	console.log(getMyInfoState.status == 401)
	useEffect(() => {
		dispatch(getMyInfo())
	}, [])

	useEffect(() => {
		getMyInfoState.status == 401
			? logout()
			: dispatch(getMyInfo())
	}, [getMyInfoState.status])


	const contextValue = {
		...getMyInfoState,
	};

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	const contextValue = useContext(UserContext);
	if (!contextValue) {
		throw new Error('useUserContext must be used within a UserProvider');
	}
	return contextValue;
};
