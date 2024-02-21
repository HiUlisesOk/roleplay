import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastActiveTopics } from '@/redux/Features/topics/Actions/topicsActions';
import { getLastActiveTopicsSelector } from '@/redux/Features/topics/Selectors/topicsSelector';
import { success } from '@/redux/constantRedux';

const useGetLastTopics = () => {
  const dispatch = useDispatch<any>();
  const { lastActiveTopics, status } = useSelector(getLastActiveTopicsSelector);

  useEffect(() => {
    dispatch(getLastActiveTopics());
  }, [dispatch]);

  return status === success ? lastActiveTopics : [];
};

export default useGetLastTopics;