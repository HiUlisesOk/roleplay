import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUserByIdSelector, getUserRolesByIdSelector } from '../redux/selector/userSelector'
import { useState } from 'react'
import { useEffect } from 'react'
import { getUserRolesById } from '../redux/actions/userActions'

const IsAllowed = ({ roles, children }) => {
	const { getUserByIdState } = useSelector(getUserByIdSelector)
	const { getUserRolesByIdState } = useSelector(getUserRolesByIdSelector)

	const [user, setUser] = useState({});
	const [allowByPass, setAllowByPass] = useState(false);
	console.log('userFromisAllowed', user, getUserRolesByIdState)

	useEffect(() => {
		getUserByIdState && setUser(getUserByIdState)
	}, [getUserByIdState])

	const dispatch = useDispatch()
	useEffect(() => {
		if (user) {
			dispatch(getUserRolesById(user.ID))
		}
	}, [dispatch, user])

	if (getUserRolesByIdState && getUserRolesByIdState.length > 0 && user.ID) {
		const allowed = getUserRolesByIdState.some((userRoles) => {
			const isAllowedByRoleValue = roles.includes(userRoles.value);
			const isAdmin = userRoles.value === 2;
			return isAllowedByRoleValue || isAdmin;
		});

		if (allowed) {
			return children;
		} else {
			return <Navigate to="/home" />;
		}
	}


}

export default IsAllowed