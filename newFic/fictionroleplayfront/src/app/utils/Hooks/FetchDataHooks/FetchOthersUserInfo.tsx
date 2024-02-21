import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idle, loading, success } from '@/redux/constantRedux';
import { selectgetUserById } from '@/redux/Features/users/Selectors/userSelectors';
import { getUserById } from '@/redux/Features/users/Actions/usersActions';

const useGetUserById = (id: number | string | string[] | null) => {
	const dispatch = useDispatch<any>();
	const { getUserByIdState, status } = useSelector(selectgetUserById);
	useEffect(() => {
		id &&
			dispatch(getUserById(id));
	}, [dispatch, id]);

	return status === success ? getUserByIdState : {};
};

export default useGetUserById;