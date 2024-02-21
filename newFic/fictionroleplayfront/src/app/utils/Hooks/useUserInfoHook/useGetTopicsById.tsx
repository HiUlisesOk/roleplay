import { useDispatch, useSelector } from "react-redux";
import { getTopicsByIdSelector } from "@/redux/Features/topics/Selectors/topicsSelector";
import { useEffect } from "react";
import { getTopicsById } from "@/redux/Features/topics/Actions/topicsActions";

const useGetTopicsById = (id: number | string | string[]) => {

	const dispatch = useDispatch<any>();
	const { getTopicsByIdState } = useSelector(getTopicsByIdSelector);
	const topic = getTopicsByIdState?.topic;
	const posts = getTopicsByIdState?.posts;

	useEffect(() => {
		id &&
			dispatch(getTopicsById(id));
	}, [dispatch, id]);

	// return status === success ? getUserByIdState : {};

	return { topic, posts };

}

export default useGetTopicsById;