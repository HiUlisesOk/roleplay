import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { success, idle } from '@/redux/constantRedux';
import { selectgetUserActivityById } from '@/redux/Features/users/Selectors/userSelectors';
import { getUserActivityById } from '@/redux/Features/users/Actions/usersActions';

const useGetMyActivity = (ID: number | string) => {
	const dispatch = useDispatch<any>();
	const { getUserActivityByIdState, status } = useSelector(selectgetUserActivityById);
	console.log('getUserActivityByIdState =>', getUserActivityByIdState)
	useEffect(() => {
		ID
			&& dispatch(getUserActivityById(ID));
	}, [dispatch, ID]);

	return status === success ? getUserActivityByIdState : {};
};

export default useGetMyActivity;