import { useParams } from "next/navigation";
import useGetMyInfo from "../FetchDataHooks/FetchMyInfo";
import useGetUserById from "../FetchDataHooks/FetchOthersUserInfo";
import { useEffect } from "react";

const useUserInfo = () => {

	const { id: routeParamId } = useParams();

	const { ID: loggedInUserId } = useGetMyInfo();

	const userProfile = (loggedInUserId == routeParamId) ? useGetMyInfo() : useGetUserById(routeParamId);

	console.log(userProfile, loggedInUserId, routeParamId)
	return { userProfile, loggedInUserId, routeParamId };

}

export default useUserInfo;