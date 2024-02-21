import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idle, success } from '@/redux/constantRedux';
import { selectGetMyInfo } from '@/redux/Features/users/Selectors/userSelectors';
import { getMyInfo } from '@/redux/Features/users/Actions/usersActions';

const useGetMyInfo = () => {
	const dispatch = useDispatch<any>();
	const { getMyInfoState, status } = useSelector(selectGetMyInfo);
	// console.log(getMyInfoState)
	useEffect(() => {
		!getMyInfoState?.ID
			&& status == idle
			&& dispatch(getMyInfo());
	}, [dispatch, getMyInfoState?.ID]);

	return status === success ? getMyInfoState : {};
};

export default useGetMyInfo;